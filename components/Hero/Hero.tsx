import Image from "next/image";
import { cv } from "@/data";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <Image
        src={withBasePath(cv.heroImage.src)}
        alt={cv.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white md:w-auto">
        <h1 className="mb-1 text-5xl leading-normal md:text-6xl">
          {cv.fullName}
        </h1>
        <p className="text-center text-2xl [perspective:600px] md:text-3xl">
          {cv.tagline.prefix}
          <span className="inline-block origin-center animate-span-flip motion-reduce:animate-none">
            {cv.tagline.highlight}
          </span>
        </p>
      </div>
    </section>
  );
}
