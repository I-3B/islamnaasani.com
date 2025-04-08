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
        <p>
          Did two projects:{" "}
          <Link target="_blank" href="https://github.com/I-AM-22/uBay">
            uBay
          </Link>
          {", "}
          <Link target="_blank" href="https://github.com/I-AM-22/naqla">
            Naqla (نقلة)
          </Link>
        </p>
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
            {`I was the main front-end developer, where I built the admin dashboard and the web app of `}
            <a href="https://safra-binakra.com/">Safra Binakra</a>.
          </p>
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
      <div>
        <p>
          Led the development of multiple projects and actively contributed to
          others, most notably{" "}
          <a href="https://hotelsentral.com.my/">Hotel Sentral</a> PMS,{" "}
          <a href="https://www.ckpartners.com.my/">CKP</a> Portal and
          HappieToken.
        </p>
      </div>
    ),
  },
];
