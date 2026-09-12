import Image from "next/image";
import { cv } from "@/data";
import { withBasePath } from "@/lib/paths";

const github = cv.socialLinks.find((item) => item.id === "github");

export default function Footer() {
  return (
    <footer className="relative z-20 shrink-0 border-t border-white/10 bg-[rgba(14,15,16,0.9)] px-4 py-2 text-white">
      <ul className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base">
        <li className="flex items-center justify-center">
          <a
            href={cv.footer.course.schoolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
            aria-label={cv.footer.course.logo.alt}
          >
            <Image
              src={withBasePath(cv.footer.course.logo.src)}
              alt={cv.footer.course.logo.alt}
              width={28}
              height={28}
              className="size-7 rounded-full object-cover"
            />
          </a>
        </li>
        <li>
          <a
            href={cv.footer.course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            RS School Short Track
          </a>
        </li>
        {github ? (
          <li>
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {`${cv.shortName} ${github.label}`}
            </a>
          </li>
        ) : null}
        <li>
          <span>© {cv.footer.year}</span>
        </li>
      </ul>
    </footer>
  );
}
