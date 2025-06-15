"use client";
import { EXPERIENCES } from "@/data/experiences";
import { FC } from "react";

export type WorkProps = {};
export const Work: FC<WorkProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-semibold">Work</h2>
      <div className="space-y-4">
        {[...EXPERIENCES].reverse().map((exp, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-medium">{exp.company}</span>
                <span className="text-base text-muted-foreground">
                  {exp.title}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({exp.from.split("-")[0]} -{" "}
                {exp.to ? exp.to.split("-")[0] : "present"})
              </span>
            </div>
            <div className="text-muted-foreground [&_a]:underline">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
