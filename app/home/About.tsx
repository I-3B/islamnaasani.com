import { FC } from "react";
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="max-w-lg flex-1 px-2 py-3 sm:px-10 sm:text-lg [&_p]:mb-4">
      <p>
        I'm a software engineer with 2+ years of experience, a linux enthusiast,
        and a TypeScript fan.
      </p>
      <p>
        Sometimes, I share new learnings or encountered problems.{" "}
        <em className="not-italic">
          I mainly talk about <strong>React</strong>,{" "}
          <strong>TypeScript</strong> and <strong>JavaScript</strong>
        </em>
      </p>
    </section>
  );
};
