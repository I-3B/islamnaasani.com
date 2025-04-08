import { readMdFile } from "@/utils/md";
import { readdirSync } from "fs";
import Link from "next/link";
import { FC } from "react";

import { Card } from "@/components/ui/card";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { ArrowUpRight } from "lucide-react";

export type ProjectsProps = {};
export const Projects: FC<ProjectsProps> = async ({}) => {
  const files = readdirSync(getPublicPath("content/projects"), "utf8");
  const parsed = (
    await Promise.all(
      files.map((file) =>
        readMdFile(
          lookupPublicFile(
            getPublicPath(`content/projects/${file.split(".")[0]}`),
            "mdx",
          ) ?? "",
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter((project) => project.featured !== undefined)
    .sort((a, b) => a.rank - b.rank);
  return (
    <Card className="m-3 flex max-w-2xl flex-col gap-3 p-5">
      <h2 className="my-2 text-4xl">Projects</h2>
      <ul className="flex flex-col items-start gap-4">
        {parsed.map((project, index) => (
          <li key={index} className="overflow-hidden ps-5">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline"
            >
              <h3 className="inline text-xl font-bold">{project.title}</h3>
            </Link>
            <p className="text-lg">{project.summary}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="me-auto rounded-lg  px-4 py-2 hover:bg-accent"
      >
        View All Projects <ArrowUpRight className="inline-block" />
      </Link>
    </Card>
  );
};
