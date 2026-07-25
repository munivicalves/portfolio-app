import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import Intro from "../components/about/Intro";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";
import Languages from "../components/about/Languages";
import Hobbies from "../components/about/Hobbies";

function About() {
  return (
    <Container className="pt-0">

      <div className="space-y-8">

        <Intro />

        <Section>
          <Experience />
        </Section>

        <div className="grid gap-8 lg:grid-cols-2">

          <Section>
            <Education />
          </Section>

          <Section>
            <Skills />
          </Section>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <Section>
            <Languages />
          </Section>

          <Section>
            <Hobbies />
          </Section>

        </div>

      </div>

    </Container>
  );
}

export default About;