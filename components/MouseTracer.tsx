"use client";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import classes from "./MouseTracer.module.css";
export type MouseTracerProps = {};
export const MouseTracer: FC<MouseTracerProps> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isTrackingActive, setIsTrackingActive] = useState(false);

  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      const x1 = ref.current.getBoundingClientRect().left;
      const y1 = ref.current.getBoundingClientRect().top;
      let x2 = 0;
      let y2 = 0;
      if (e instanceof MouseEvent) {
        x2 = e.clientX - ref.current.clientWidth / 2;
        y2 = e.clientY - ref.current.clientHeight / 2;
      } else {
        x2 = e.touches[0].clientX - ref.current.clientWidth / 2;
        y2 = e.touches[0].clientY - ref.current.clientHeight / 2;
      }
      const SPEED = 0.005;
      const duration =
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / SPEED;
      if (isTrackingActive) {
        ref.current.animate(
          {
            left: `${x2}px`,
            top: `${y2}px`,
          },
          { duration, fill: "forwards" },
        );
      } else {
        ref.current.style.left = `${x2}px`;
        ref.current.style.top = `${y2}px`;
      }
    };
    window.addEventListener("mouseover", listener);
    window.addEventListener("mousemove", listener);
    window.addEventListener("touchstart", listener);
    return () => {
      window.removeEventListener("mouseover", listener);
      window.removeEventListener("mousemove", listener);
      window.addEventListener("touchstart", listener);
    };
  }, [isTrackingActive]);
  useEffect(() => {
    setTimeout(() => {
      if (ref.current && !ref.current?.style.left) {
        console.log(ref.current.clientWidth / 2);

        ref.current.style.left = `${ref.current.clientWidth / 2}px`;
        ref.current.style.top = `${ref.current.clientHeight / 2}px`;
      }
      setIsTrackingActive(true);
    }, 2000);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div
        ref={ref}
        className={cn(
          "absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r from-red-600 to-purple-700 opacity-0 brightness-50",
          isTrackingActive && classes.animate,
        )}
      />
      <div className="absolute inset-0 z-10 backdrop-blur-[125px]"></div>
    </div>
  );
};
