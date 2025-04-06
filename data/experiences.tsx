import { Link } from "@/components/ui/link";
import { ReactNode } from "react";

export type Experience = {
  title: ReactNode;
  company: ReactNode;
  location?: ReactNode;
  from: string;
  to: string | null;
  noDuration?: boolean;
  description: ReactNode;
};
export const EXPERIENCES: Experience[] = [
  {
    title: "Information Technology Engineering",
    company: (
      <Link target="_blank" href="https://www.alepuniv.edu.sy/">
        University Of Aleppo
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2019-9",
    to: "2024-8",
    noDuration: true,
    description: (
      <>
        <p>{`Graduated with a 86% grade.`}</p>
        <ul>
          <li>
            {
              "As I took more software engineering courses I've done my 4th year project, "
            }
            <Link target="_blank" href="https://github.com/I-AM-22/uBay">
              uBay
            </Link>
            {` which is a social media platform for selling and buying second-hand items.`}
          </li>
          <li>
            And my graduation project,{" "}
            <Link target="_blank" href="https://github.com/I-AM-22/naqla">
              Naqla (نقلة)
            </Link>
            , a platform designed to simplify the process of moving house
            furniture and goods.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "React Developer",
    company: (
      <Link target="_blank" href="http://www.ulutech-sy.com/">
        Ulutech
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2022-10",
    to: "2022-12-8",
    description: (
      <>
        <p>
          I contributed to{" "}
          <a href="https://play.google.com/store/apps/details?id=com.nbs.alphameal&hl=en&pli=1">
            HumyApp
          </a>
          's dashboard development.{" "}
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: "CLICK Online",
    location: "Aleppo, Syria",
    from: "2022-12",
    to: "2023-12",
    description: (
      <>
        <div>
          <p>
            {`CLICK Online is a product startup, I worked in the development team on two products.`}
          </p>
          <ul>
            <li>
              One is <a href="https://safra-binakra.com/">Safra Binakra</a> {""}
              which is a platform for inland traveling in Syria.
            </li>
            <li>
              The second product is a management system for a university, which
              was still under development.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <Link target="_blank" href="https://studio20.my/">
        Studio20
      </Link>
    ),
    location: "Kuala Lumpur, Malaysia (Remote)",
    from: "2024-2-1",
    to: null,
    description: (
      <ul>
        <li>
          Led the development of multiple projects and actively contributed to
          others through coding and code reviews.
        </li>
        <li>I'm the go-to person for CI/CD pipelines.</li>
      </ul>
    ),
  },
];
