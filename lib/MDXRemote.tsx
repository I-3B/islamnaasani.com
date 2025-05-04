import {
  A,
  Blockquote,
  Code,
  CodeBlock,
  H1,
  H2,
  H3,
  H4,
  HR,
  Image,
  LI,
  OL,
  P,
  Source,
  Strong,
  UL,
} from "@/components/ui/md";
import {
  MDXRemote as MDXRemotePrimitive,
  MDXRemoteProps as MDXRemotePrimitiveProps,
} from "next-mdx-remote/rsc";
import { ComponentPropsWithoutRef, FC, NamedExoticComponent } from "react";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
//@ts-expect-error
import codesandbox from "remark-codesandbox";
const MDXComponents = {
  img: Image as NamedExoticComponent<ComponentPropsWithoutRef<"img">>,
  Image,
  Source,
  p: P,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  hr: HR,
  code: Code,
  Code: Code,
  pre: CodeBlock,
};
export default MDXComponents;
export type MDXRemoteProps = MDXRemotePrimitiveProps;
export const MDXRemote: FC<MDXRemoteProps> = ({ ...props }) => {
  return (
    <MDXRemotePrimitive
      components={MDXComponents}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
          remarkPlugins: [[codesandbox, { mode: "button" }]],
        },
      }}
      {...props}
    />
  );
};
