import { NewsletterForm } from "@/components/NewsletterForm";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="grid grid-cols-1 justify-center gap-10 p-5 text-xl md:p-20 lg:grid-cols-3 lg:gap-0">
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl font-semibold">Islam Naasani</h5>
        <nav>
          <ul className="flex flex-col gap-4 ps-4">
            <li>
              <Link href={"/"} className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="underline">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="order-1 md:order-none">
        <div className="xs:gap-2 flex flex-row flex-wrap items-start justify-center text-xl lg:mt-0">
          <FooterLink
            href={"https://github.com/I-3B"}
            gradientProps={{ className: "from-purple-800 to-purple-600" }}
          >
            <Github aria-label="GitHub" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-900 to-blue-600" }}
            href={"https://www.linkedin.com/in/islam-nassani"}
          >
            <Linkedin aria-label="LinkedIn" />
          </FooterLink>
          <FooterLink
            href={"mailto:islamnaasani@gmail.com"}
            gradientProps={{ className: "from-red-700 to-orange-500" }}
          >
            <Mail aria-label="Email" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-300 to-blue-600" }}
            href="https://twitter.com/i_3b___"
          >
            <svg
              width="396"
              aria-label="X/Twitter"
              height="396"
              viewBox="0 0 396 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z"
                fill="white"
              />
            </svg>
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-300 to-blue-400" }}
            href={"https://bsky.app/profile/islamnaasani.bsky.social"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.999 452.266"
            >
              <path
                fill="white"
                d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z"
              />
            </svg>
          </FooterLink>
        </div>
      </div>
      <NewsletterForm className="-order-1 lg:order-1" />
    </footer>
  );
};

export type FooterLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  gradientProps: ComponentPropsWithoutRef<"div">;
};
export const FooterLink: FC<FooterLinkProps> = ({
  gradientProps,
  ...props
}) => {
  return (
    <Link
      {...props}
      className="relative h-10 w-10 overflow-hidden rounded-sm [&:hover>.gradient]:bg-gradient-to-l [&:hover>.gradient]:opacity-100"
    >
      <div
        className={cn(
          "gradient absolute -inset-3 animate-[spin_5s_ease-in-out_infinite] opacity-0 blur-sm transition-opacity",
          gradientProps.className,
        )}
      />
      <div className="absolute inset-0 z-10 m-1.5 flex [&>svg]:h-full [&>svg]:w-full">
        {props.children}
      </div>
    </Link>
  );
};
