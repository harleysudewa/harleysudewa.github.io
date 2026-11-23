import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FadeInUp>
          <About />
        </FadeInUp>
        <FadeInUp>
          <Experience />
        </FadeInUp>
        <FadeInUp>
          <Projects />
        </FadeInUp>
        <FadeInUp>
          <Education />
        </FadeInUp>
        <FadeInUp>
          <Contact />
        </FadeInUp>
      </main>
      <Footer />
    </>
  );
}
