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
  about: {
    title: "About Me",
    location: "Yerevan, Armenia",
    photo: {
      src: "/Aghas.jpg",
      alt: "Portrait of Aghasy Ghazaryan",
    },
    introduction: [
      "I am a Front-End Developer with 2.5+ years of experience in web development, including multiple successful React/Next.js projects and extensive hands-on work with Javascript/Typescript. In most of my previous positions I collaborated closely with cross-functional teams to build and maintain projects using technologies like React.js, Next.js, Redux Toolkit, TypeScript, Tailwind CSS, SCSS, styled Components and more. I have also strong experience with AI assistants like Cursor and Copilot to build projects faster.",
      "My responsibilities included building responsive, performance-optimized, SEO-optimized, component-based user interfaces, integrating APIs and handling all front-end related tasks, from layout design and state management to ensuring seamless user experiences.",
    ],
  },
  services: {
    title: "Services",
    items: [
      {
        icon: "web",
        title: "Web Development",
        description:
          "I build modern web applications with strong front-end craft, from polished UI to maintainable component architecture.",
      },
      {
        icon: "performance",
        title: "Improve performance",
        description:
          "I tune load speed, rendering, and UX so sites feel fast and stay pleasant to use under real-world conditions.",
      },
      {
        icon: "responsive",
        title: "Responsive websites",
        description:
          "I deliver layouts that adapt cleanly across phones, tablets, and desktops with accessible, consistent behavior.",
      },
      {
        icon: "support",
        title: "Quick Support",
        description:
          "I respond quickly to front-end issues and keep sites stable with efficient fixes and clear communication.",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        icon: "degree",
        institution: "Armenian State University of Economics",
        program:
          "Bachelor Of Management, Business Administration and Management",
        period: "Sep 2014 – May 2020",
        description:
          "I studied Economics for 4 years at the Armenian State University of Economics, focusing on areas such as management of economy, marketing, accounting, and more.",
      },
      {
        icon: "course",
        institution: "Microsoft Innovation Center Armenia",
        program: "Programming with JavaScript",
        period: "2021",
        description:
          "Began my professional journey in web development through the Programming with JavaScript course at the Microsoft Innovation Center Armenia. Building on this core foundation, I independently advanced my technical stack, mastering React and Next.js through official documentation, hands-on projects, and self-directed study.",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "English", level: "B2" },
      { name: "Armenian", level: "Native or Bilingual" },
      { name: "Russian", level: "B2" },
    ],
  },
} as const;

export type Cv = typeof cv;
