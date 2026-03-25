import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
