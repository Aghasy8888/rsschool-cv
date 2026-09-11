export const cv = {
  fullName: "Aghasy Ghazaryan",
  shortName: "Aghasy",
  tagline: {
    prefix: "I am a ",
    highlight: "Developer",
  },
  description:
    "I am a Frontend Developer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.",
  heroImage: {
    src: "/armenia-forest.png",
    alt: "Forested mountains in Armenia under a cloudy sky",
  },
} as const;

export type Cv = typeof cv;
