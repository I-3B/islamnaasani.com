import { readMdFile } from "@/utils/md";
import { readdirSync } from "fs";
import Link from "next/link";
import { FC } from "react";

import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { ExternalLink } from "lucide-react";

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
          { frontmatterOnly: true },
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter((project) => project.featured)
    .sort((a, b) => a.rank - b.rank);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="flex flex-col items-start gap-3">
        {parsed.map((project, index) => (
          <li key={index} className="overflow-hidden">
            <div className="flex flex-col gap-1">
              <Link
                href={`/projects/${project.slug}`}
                className="text-lg font-medium hover:underline"
              >
                {project.title}
              </Link>
              <span className="text-base text-muted-foreground">
                {project.summary}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="flex items-center gap-1 text-base text-muted-foreground hover:underline"
      >
        All projects
        <ExternalLink size={16} />
      </Link>
    </div>
  );
};
