import {
  About,
  Contact,
  Education,
  Languages,
  Projects,
  Services,
  Skills,
} from "@/components";
import { ABOUT, CONTACT, PROJECTS, SKILLS } from "@/constants";

type SectionOutletProps = {
  path: string;
};

export default function SectionOutlet({ path }: SectionOutletProps) {
  switch (path) {
    case ABOUT:
      return (
        <div className="space-y-16">
          <About />
          <Services />
          <Education />
          <Languages />
        </div>
      );
    case SKILLS:
      return <Skills />;
    case PROJECTS:
      return <Projects />;
    case CONTACT:
      return <Contact />;
    default:
      return null;
  }
}
