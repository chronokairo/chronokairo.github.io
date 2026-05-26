import type React from "react";
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

const projectIllustrations: Record<string, React.FC> = {
  "CK CMS": CMSIllustration,
  "CK CRM": CRMIllustration,
  "CK Agropeso": AgropesoIllustration,
  "CK RAG": RAGIllustration,
  "CK SGR": SGRIllustration,
  "ThinkTrack": ThinkTrackIllustration,
  "CK Site Educacional": CMSiteEduIllustration,
};

const projects = [
  {
    title: "CK CMS",
    category: "Web",
    description:
      "Sistema de Gerenciamento de Conteúdo moderno e extensível com dashboard administrativo, gestão de usuários e integrações com TOTVS RM e AWS S3.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    images: [],
  },
  {
    title: "CK CRM",
    category: "Sistema",
    description:
      "Sistema completo de CRM multiplataforma para gestão de relacionamento com clientes, vendas, produtos e relatórios.",
    tech: ["Flutter", "Dart", "Riverpod", "Hive"],
    images: [],
  },
  {
    title: "CK Agropeso",
    category: "Mobile",
    description:
      "Sistema de pesagem agropecuária com integração com balanças via comunicação serial e gestão de lotes de animais.",
    tech: ["Flutter", "Dart", "SQLite"],
    images: [],
  },
  {
    title: "CK RAG",
    category: "IA",
    description:
      "Sistema de chat inteligente com RAG que consulta APIs TOTVS e responde perguntas usando LLM local via Ollama.",
    tech: ["React", "Node.js", "Ollama", "TypeScript"],
    images: [],
  },
  {
    title: "CK SGR",
    category: "Sistema",
    description:
      "Sistema de Gestão de Rede para provedores de internet com integração MikroTik, OLT e monitoramento em tempo real.",
    tech: ["Flutter", "Firebase", "Dart", "SSH"],
    images: [],
  },
  {
    title: "ThinkTrack",
    category: "Web",
    description:
      "Sistema de gestão de projetos com integração GitHub, Kanban board, gráfico de Gantt e sincronização automática via webhooks.",
    tech: ["React", "TypeScript", "Firebase", "Material-UI"],
    images: [],
  },
  {
    title: "CK Site Educacional",
    category: "Web",
    description:
      "Portal educacional omnichannel com middleware de integração RM Edu TOTVS para matrículas, notas, boletos e comunicação acadêmica.",
    tech: ["Next.js", "TypeScript", "Tailwind", "TOTVS RM"],
    images: [],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Nosso <span className="text-muted-foreground">portfólio</span>
          </h2>
          <p className="text-muted-foreground">
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
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="aspect-[16/10] bg-foreground/[0.02] relative overflow-hidden">
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
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full border border-border">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-foreground/5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-foreground/20" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-foreground/5 transition-colors font-medium">
            Ver todos os projetos
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
