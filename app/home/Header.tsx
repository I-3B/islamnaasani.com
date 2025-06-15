"use client";

import { motion } from "framer-motion";
import { FC } from "react";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <section>
      <motion.header className="flex flex-col gap-2">
        <motion.h1
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: [+20, 0], opacity: [0.3, 1] }}
          transition={{ type: "spring" }}
          className="text-4xl font-bold"
          drag
          dragMomentum
          dragSnapToOrigin
        >
          Islam Naasani
        </motion.h1>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </motion.header>
    </section>
  );
};
