import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
                  Blog
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
                  Tecnologia, IA e <span className="font-normal italic">Automação</span>
                </h1>
                <p className="text-foreground/80 text-sm">
                  Artigos e insights sobre tecnologia, inteligência artificial e transformação digital para empresas em Manaus e Amazonas.
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border p-6 md:p-8 transition-all hover:border-foreground/25 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-[10px] font-mono uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Por {post.author}</span>
                      <span className="flex items-center gap-1 text-foreground/50 group-hover:text-foreground transition-colors">
                        Ler artigo <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
