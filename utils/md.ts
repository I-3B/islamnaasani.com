import { readFileSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function readMdFile(
  filePath: string,
  options: { frontmatterOnly?: boolean } = {},
) {
  const fileContents = readFileSync(filePath, "utf8");

  if (options.frontmatterOnly) {
    const { data } = matter(fileContents);
    return { frontmatter: data };
  }

  const mdxSource = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {},
  });
  return mdxSource;
}
