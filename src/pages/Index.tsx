"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const Index = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </div>
  );
};

export default Index;
