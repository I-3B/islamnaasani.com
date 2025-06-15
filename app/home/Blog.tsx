import { IS_DEVELOPMENT } from "@/constants/flags";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import dayjs from "dayjs";
import { readdirSync } from "fs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export type BlogProps = {};
export const Blog: FC<BlogProps> = async ({}) => {
  const files = readdirSync(getPublicPath("content/blog"), "utf8");
  const parsed = (
    await Promise.all(
      files.map((file) =>
        readMdFile(
          lookupPublicFile(
            getPublicPath(`content/blog/${file.split(".")[0]}`),
            "mdx",
          ) ?? "",
          { frontmatterOnly: true },
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...blogMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter((post) => post.draft !== true || IS_DEVELOPMENT)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-1">
      <h2 className="mb-2 text-2xl font-semibold">Blog</h2>
      <ul className="flex flex-col items-start gap-4">
        {parsed.map((post, index) => (
          <li key={index} className="flex flex-col gap-1 overflow-hidden">
            <Link
              href={`/blog/${post.slug}`}
              className="text-base font-medium hover:underline md:text-lg"
            >
              {post.title}
            </Link>
            <span className="-order-1 text-xs text-muted-foreground">
              {dayjs(post.publishedAt).format("MMM d, YYYY")}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="flex items-center gap-1 text-base text-muted-foreground hover:underline"
      >
        All posts
        <ExternalLink size={16} />
      </Link>
    </div>
  );
};
