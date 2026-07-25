import Hero from "../components/home/Hero";
import Skillset from "../components/home/Skillset";
import LatestProjects from "../components/home/LatestProjects";
import Certifications from "../components/home/Certifications";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <div className="page-container">
      <Hero />
      <Skillset />
      <LatestProjects />
      <Certifications />
      <ContactCTA />
    </div>
  );
}

export default Home;