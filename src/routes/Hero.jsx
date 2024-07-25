import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/Aboutpage";
import Skillspage from "../components/SkillsPage/Skillspage";
import ProjectsPage from "../components/ProjectPage/ProjectPage";
import Contact from "../components/ContactPage/contact";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Link to={"/"}>
      <HomePage />
      <AboutPage />
      <Skillspage />
      <ProjectsPage />
      <Contact />
    </Link>
  );
}

export default Hero;
