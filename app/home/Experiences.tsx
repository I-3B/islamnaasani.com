"use client";
import { Card } from "@/components/ui/card";
import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import humanizeDuration from "humanize-duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { FC } from "react";
export type ExperiencesProps = {};
export const Experiences: FC<ExperiencesProps> = ({}) => {
  return (
    <Card className="m-3 flex max-w-2xl flex-col justify-center p-5 [&_a]:underline [&_ul]:list-disc [&_ul]:ps-4">
      <h2 className="mb-10 text-4xl">Career</h2>
      {[...EXPERIENCES].reverse().map((exp, i, arr) => (
        <article key={i} className="flex gap-4">
          <div
            className={cn(
              "flex min-h-full w-3 flex-col items-center justify-self-center",
            )}
          >
            <TooltipProvider>
              <Tooltip delayDuration={10}>
                <TooltipTrigger asChild>
                  <div className="h-3 w-3 rounded-full bg-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="animate-bounce rounded-md bg-background/70 p-2">
                    {dayjs(exp.from).format("YYYY/MM/DD")}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div
              className={cn(
                "w-1 flex-1 bg-foreground/60",
                i === arr.length - 1 && "bg-transparent pb-3",
              )}
            />
          </div>
          <div
            className={cn("flex max-w-[90vw] flex-col gap-1 pb-20  sm:pb-5")}
          >
            <h6 className="-mt-2 text-xl font-bold">{exp.title}</h6>
            <p className="ps-2 text-lg">
              {exp.company}
              {exp.location && " • "}
              <span className="text-secondary-foreground">{exp.location}</span>
            </p>
            <p className="ps-2 text-secondary-foreground">
              <time dateTime={dayjs(exp.from).toISOString()}>
                {dayjs(exp.from).format("MMM YYYY")}
              </time>
              {" – "}
              {exp.to !== null ? (
                <time dateTime={dayjs(exp.to).toISOString()}>
                  {dayjs(exp.to).format("MMM YYYY")}
                </time>
              ) : (
                "Present"
              )}
              {!exp.noDuration && (
                <>
                  {" • "}
                  {humanizeDuration(dayjs(exp.to ?? dayjs()).diff(exp.from), {
                    units: ["y", "mo"],
                    maxDecimalPoints: 0,
                    round: true,
                  })}
                </>
              )}
            </p>
            <div className="max-w-xl ps-2 pt-2">{exp.description}</div>
          </div>
        </article>
      ))}
    </Card>
  );
};
