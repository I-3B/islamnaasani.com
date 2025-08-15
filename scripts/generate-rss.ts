import { IS_DEVELOPMENT } from "@/constants/flags";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import { readdirSync, writeFileSync } from "fs";
import RSS from "rss";

async function generateRssFeed() {
  const feed = new RSS({
    title: "Islam Naasani Blog",
    description:
      "My personal Blog, I write about problems I've faced or new things I've learned.",
    feed_url: `${process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY}/rss.xml`,
    site_url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Islam Naasani`,
  });

  const files = readdirSync(getPublicPath("content/blog"), "utf8");
  (
    await Promise.all(
      files.map((file) =>
        readMdFile(
          lookupPublicFile(
            getPublicPath(`content/blog/${file.split(".")[0]}`),
            "mdx",
          ) ?? "",
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...md.frontmatter,
      ...blogMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter((post) => post.draft !== true || IS_DEVELOPMENT)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .forEach((post) =>
      feed.item({
        title: post.title,
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${post.slug}`,
        guid: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${post.slug}`,
        date: post.publishedAt,
        description: post.summary,
        categories: post.tags,
        author: "Islam Naasani",
      }),
    );
  writeFileSync(getPublicPath("rss.xml"), feed.xml());
  console.log("RSS feed generated successfully!");
}

generateRssFeed();
