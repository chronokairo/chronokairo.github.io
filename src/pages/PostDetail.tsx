"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/data/posts";

const PostDetail = ({ slug }: { slug: string }) => {
  const post = getPostBySlug(slug);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28">
          <article className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao blog
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full text-[10px] font-mono uppercase tracking-wider">
                    <Tag className="h-2.5 w-2.5 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.05]">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </span>
                <span>Por {post.author}</span>
              </div>

              <div className="mt-12 prose prose-sm md:prose-base prose-invert max-w-none">
                {post.content.split("\n").map((paragraph, i) => (
                  paragraph.trim() ? (
                    <p key={i} className="text-foreground/80 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ) : null
                ))}
              </div>

              {post.source && (
                <div className="mt-10 p-4 rounded-xl border border-border bg-foreground/[0.02]">
                  <p className="text-xs text-muted-foreground mb-1 font-mono uppercase tracking-wider">Fonte</p>
                  <a
                    href={post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {post.source}
                  </a>
                </div>
              )}
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PostDetail;
