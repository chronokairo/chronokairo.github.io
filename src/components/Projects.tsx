import type React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  CMSIllustration,
  CRMIllustration,
  AgropesoIllustration,
  RAGIllustration,
  SGRIllustration,
  ThinkTrackIllustration,
  CMSiteEduIllustration,
} from "./illustrations";
import { products } from "@/data/products";

const projectIllustrations: Record<string, React.FC> = {
  "Kairos CMS": CMSIllustration,
  "Kairos CRM": CRMIllustration,
  "Chronos AGP": AgropesoIllustration,
  "Kairos RAG": RAGIllustration,
  "Kairos DEV": RAGIllustration,
  "Chronos SGR": SGRIllustration,
  "Kairos TRK": ThinkTrackIllustration,
  "Kairos Edu": CMSiteEduIllustration,
  "Kairos Git": ThinkTrackIllustration,
  "Kairos Support": CMSIllustration,
  "Kairos People": CRMIllustration,
  "Kairos FIN": CRMIllustration,
  "Kairos Sales": CRMIllustration,
  "Kairos MKT": CMSIllustration,
  "Kairos CS": CRMIllustration,
  "Chronos ERP": SGRIllustration,
  "Chronos SEC": RAGIllustration,
};

const projects = products.map((product) => ({
  title: product.title,
  category: product.category,
  description: product.description,
  tech: product.stack,
  slug: product.slug,
  images: [],
}));

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dots opacity-[0.15]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Produtos em destaque
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
            Nosso <span className="font-normal italic">catálogo</span>
          </h2>
          <p className="text-foreground/80 text-sm">
            Trabalhos desenvolvidos com dedicação e expertise técnica.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={`/produtos/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-foreground/30"
                >
                  <div className="aspect-[16/10] bg-foreground/[0.02] relative overflow-hidden border-b border-border">
                    {project.images.length > 0 ? (
                      <Carousel opts={{ loop: true }} className="w-full h-full">
                        <CarouselContent className="h-full -ml-0">
                          {project.images.map((img, imgIndex) => (
                            <CarouselItem key={imgIndex} className="h-full pl-0">
                              <img
                                src={img}
                                alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Carousel>
                    ) : (
                      <>
                        {projectIllustrations[project.title] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {(() => {
                              const Illustration = projectIllustrations[project.title];
                              return <Illustration />;
                            })()}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center bg-background/90 backdrop-blur-sm">
                            <ExternalLink className="w-4 h-4 text-foreground" />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-[11px] font-mono bg-background/90 backdrop-blur-sm rounded-full border border-border text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2 flex items-center justify-between text-foreground">
                        {project.title}
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-mono bg-secondary text-foreground rounded border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors text-sm font-medium cursor-pointer"
          >
            Ver catálogo completo
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
