import Footer from "./components/about-me";
import Declaration from "./components/declaration";
import Education from "./components/education";
import Hero from "./components/hero";
import Hobbies from "./components/hobbies";
import ProffesionalProfile from "./components/proffestional-pro";
import SoftwareSkills from "./components/technical-skill";
import WorkExperiance from "./components/work-exp";

export default function Home() {
  return (
  <>
   
     <Hero/>
     <ProffesionalProfile/>
     <WorkExperiance/>
     <Education/>
     <SoftwareSkills/>
     <Hobbies/>
     <Declaration/> 
     <Footer/>
  </>
  );
}
