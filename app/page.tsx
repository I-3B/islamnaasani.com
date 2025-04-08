import { MouseTracer } from "@/components/MouseTracer";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import { About } from "./home/About";
import { Experiences } from "./home/Experiences";
import { Header } from "./home/Header";
import { Projects } from "./home/Projects";

export const metadata: Metadata = {
  title: "Islam Naasani",
  description: "Front-end Developer",
  icons: ["/favicon.ico"],
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-5 px-2 md:px-10">
        <Card className="m-3 mt-[10vh] max-w-2xl p-5">
          <Header />
          <About />
        </Card>
        <Experiences />
        <Projects />
      </div>
      <MouseTracer />
    </>
  );
}
