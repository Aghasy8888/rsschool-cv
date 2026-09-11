import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

type SectionOutletProps = {
  path: string;
};

export default function SectionOutlet({ path }: SectionOutletProps) {
  switch (path) {
    case "/about":
      return <About />;
    case "/skills":
      return <Skills />;
    case "/projects":
      return <Projects />;
    case "/contact":
      return <Contact />;
    default:
      return null;
  }
}
