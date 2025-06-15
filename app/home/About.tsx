import { FC } from "react";
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="flex-1 py-3 sm:text-lg">
      <p>
        I'm a software engineer with 2+ years of experience, a linux enthusiast,
        and a TypeScript fan.
      </p>
      <p className="mt-2">
        Sometimes, I share new learnings or encountered problems.{" "}
        <em className="not-italic">
          I mainly talk about <strong>React</strong>,{" "}
          <strong>TypeScript</strong> and <strong>JavaScript</strong>
        </em>
      </p>
    </section>
  );
};
