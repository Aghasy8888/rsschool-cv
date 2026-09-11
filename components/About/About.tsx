import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";
import { withBasePath } from "@/lib/paths";

export default function About() {
  return (
    <section>
      <SectionTitle>{cv.about.title}</SectionTitle>
      <Card>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
          <Image
            src={withBasePath(cv.about.photo.src)}
            alt={cv.about.photo.alt}
            width={192}
            height={192}
            sizes="192px"
            className="size-40 shrink-0 rounded-full object-cover md:size-48"
            priority
          />
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <p className="text-2xl font-semibold text-white md:text-3xl">
              {cv.fullName}
            </p>
            <p className="flex items-center justify-center gap-2 text-accent md:justify-start">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              <span>{cv.about.location}</span>
            </p>
            <div className="mt-2 space-y-4 text-base leading-relaxed text-white/90">
              {cv.about.introduction.map((paragraph, index) => (
                <p key={index} className="text-left">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
