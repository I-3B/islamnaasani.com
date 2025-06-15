import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { readdirSync } from "fs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Islam Naasani",
};

export default async function Page() {
  const publicPath = getPublicPath("content/projects");
  const files = readdirSync(publicPath, "utf8");
  const projects = (
    await Promise.all(
      files.map((file) =>
        readMdFile(
          lookupPublicFile(`${publicPath}/${file.split(".")[0]}`, "mdx") ?? "",
          { frontmatterOnly: true },
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Projects I&apos;ve worked on, either for work or personal.
        </p>
      </div>
      <div className="mt-10 space-y-5">
        {projects.map((project, i) => (
          <div key={project.slug} className="group">
            <Link href={`/projects/${project.slug}`} className="block">
              <h2 className="mb-2 text-2xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h2>
            </Link>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            {i !== projects.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}
