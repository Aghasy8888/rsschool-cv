import { ProjectCard, SectionTitle } from "@/common";
import { cv } from "@/data";

export default function Projects() {
  const { title, featuredLabel, items } = cv.projects;

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <ul className="flex flex-col gap-16 lg:gap-24">
        {items.map((project, index) => (
          <li key={project.name}>
            <ProjectCard
              featuredLabel={featuredLabel}
              name={project.name}
              href={project.href}
              description={project.description}
              stack={project.stack}
              image={project.image}
              index={index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
