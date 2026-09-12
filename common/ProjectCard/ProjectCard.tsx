import Image from "next/image";
import { withBasePath } from "@/lib/paths";

type ProjectCardProps = {
  featuredLabel: string;
  name: string;
  href: string;
  description: string;
  stack: readonly string[];
  image: {
    src: string;
    alt: string;
  };
  index: number;
};

export default function ProjectCard({
  featuredLabel,
  name,
  href,
  description,
  stack,
  image,
  index,
}: ProjectCardProps) {
  const imageLeft = index % 2 === 1;

  return (
    <article
      className={`flex flex-col gap-6 lg:relative lg:items-center lg:gap-0 lg:gap-x-8 ${
        imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="relative z-10 flex w-full flex-col items-start gap-3 text-left lg:w-[55%]">
        <p className="text-sm font-medium text-accent">{featuredLabel}</p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">{name}</h3>
        <p
          className={`rounded-md bg-card p-5 text-base leading-relaxed text-white/90 shadow-lg lg:w-full ${
            imageLeft ? "" : "lg:mr-[-10%]"
          }`}
        >
          {description}
        </p>
        <ul className="flex flex-wrap justify-start gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded bg-black px-2.5 py-1 text-xs text-white sm:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} project`}
        className="group relative aspect-video w-full overflow-hidden lg:w-[55%]"
      >
        <Image
          src={withBasePath(image.src)}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/25 transition-all duration-500 ease-in-out group-hover:opacity-0"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
