import { Metadata } from "next";
import { About } from "./home/About";
import { Blog } from "./home/Blog";
import { Work } from "./home/Experiences";
import { Header } from "./home/Header";
import { Projects } from "./home/Projects";

export const metadata: Metadata = {
  title: "Islam Naasani",
  description: "Software Engineer",
  icons: ["/favicon.ico"],
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="">
          <Header />
          <About />
        </div>
        <Work />
        <Blog />
        <Projects />
      </div>
    </>
  );
}
