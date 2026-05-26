import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Scope from "@/components/Scope";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Games from "@/components/Games";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Scope />
          <Projects />
          <Games />
          <About />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
