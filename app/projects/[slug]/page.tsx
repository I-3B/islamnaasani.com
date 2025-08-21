import { PageViewIncrementor } from "@/components/PageViewIncrementor";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import dayjs from "dayjs";
import { readdirSync, readFileSync } from "fs";
import { Metadata } from "next";
import Image from "next/image";
import path from "path";

type Props = {
  params: { slug: string };
};
export function generateStaticParams(): { slug: string }[] {
  const filesNames = readdirSync(getPublicPath("content/projects"), "utf8");
  const slugs = filesNames.map((fileName) => ({
    slug: path.parse(fileName).name,
  }));
  return slugs;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const file = lookupPublicFile(
    getPublicPath(`content/projects/${params.slug}`),
    "mdx",
  );
  if (!file) {
    return { title: "Project Not Found" };
  }
  const title = (await readMdFile(file)).frontmatter.title as string;
  return {
    title,
    description: "",
  };
}
export default async function Page({ params }: Props) {
  const file = lookupPublicFile(
    getPublicPath(`content/projects/${params.slug}`),
    "mdx",
  );

  if (!file)
    return (
      <p className="mt-20 w-full text-center text-4xl">Project not Found</p>
    );

  const source = readFileSync(file, "utf8");
  const project = await readMdFile(file);

  const matter = projectMatterSchema.parse(project.frontmatter);
  return (
    <PageViewIncrementor>
      <article className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 px-4 text-lg">
        <h1 className="text-2xl font-bold sm:text-3xl">{matter.title}</h1>
        <div className="flex flex-wrap items-end justify-between gap-2">
          <p>
            {dayjs(matter.from).format("MMM DD, YYYY")} -{" "}
            {matter.to ? dayjs(matter.to).format("MMM DD, YYYY") : "Present"}
          </p>
          <ul className="mt-auto flex list-none  flex-wrap justify-end gap-1  pt-2">
            {matter.skills.map((skill) => (
              <li key={skill}>
                <Badge variant="outline" className="bg-muted text-sm">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        {matter.largeCover && (
          <Image
            width={720}
            height={480}
            priority
            className="mx-auto w-full rounded-md"
            sizes="(max-width: 768px) 100vw, 70vw"
            src={matter.largeCover}
            alt="project's home page"
          />
        )}
        <div className="prose prose-quoteless mt-4 max-w-full dark:prose-invert md:prose-lg prose-h2:text-3xl prose-p:my-2 prose-p:text-foreground prose-a:visited:text-purple-200 prose-blockquote:my-1 prose-ul:ml-0 prose-img:rounded-sm sm:prose-h2:text-4xl">
          <MDXRemote source={source} />
        </div>
      </article>
    </PageViewIncrementor>
  );
}
