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
  MathQuestIllustration,
  InvisibleScarsIllustration,
} from "./illustrations";

const gameIllustrations: Record<string, React.FC> = {
  "MathQuest": MathQuestIllustration,
  "InvisibleScars": InvisibleScarsIllustration,
};

const games = [
  {
    title: "MathQuest",
    category: "Jogo",
    description:
      "Quiz e Tutor IA de Matemática. Um jogo educativo que combina perguntas interativas com tutoria inteligente para aprender matemática de forma divertida.",
    tech: ["Unity", "C#", "AI", "Educacional"],
    images: [],
  },
  {
    title: "InvisibleScars",
    category: "Jogo",
    description:
      "Jogo atemporal visual novel, plataforma soulslike. Uma narrativa profunda em estilo visual novel com elementos de plataforma desafiadores inspirados em soulslike.",
    tech: ["Ren'Py", "Python", "Soulslike", "Visual Novel"],
    images: [],
  },
];

const Games = () => {
  return (
    <section id="games" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Jogos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Jogos Desenvolvidos no <span className="text-muted-foreground">LoopedSouls Studio</span>
          </h2>
          <p className="text-muted-foreground">
            Experiências interativas criadas com paixão e inovação.
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
            {games.map((game, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="aspect-[16/10] bg-foreground/[0.02] relative overflow-hidden">
                    {game.images.length > 0 ? (
                      <Carousel opts={{ loop: true }} className="w-full h-full">
                        <CarouselContent className="h-full -ml-0">
                          {game.images.map((img, imgIndex) => (
                            <CarouselItem key={imgIndex} className="h-full pl-0">
                              <img
                                src={img}
                                alt={`${game.title} - Screenshot ${imgIndex + 1}`}
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
                        {gameIllustrations[game.title] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {(() => {
                              const Illustration = gameIllustrations[game.title];
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
                        {game.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                      {game.title}
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {game.tech.map((tech, i) => (
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
          {games.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-foreground/20" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-foreground/5 transition-colors font-medium">
            Ver todos os jogos
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Games;