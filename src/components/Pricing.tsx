"use client";

import { CheckCircle2 } from "lucide-react";
import { getPricingForProduct } from "@/data/pricing";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { Button } from "@chronokairo/platform/ui";

const PricingCard = ({ slug }: { slug: string }) => {
  const pricing = getPricingForProduct(slug);

  if (!pricing) {
    return null;
  }

  const whatsappUrl = `https://wa.me/5592981244044?text=Ol%C3%A1%20Chronokairo.%20Gostaria%20de%20conversar%20sobre%20a%20solu%C3%A7%C3%A3o%20${encodeURIComponent(slug)}.`;

  return (
    <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-7 space-y-6 sticky top-28 shadow-sm">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Modelos de Contratação
        </p>
        <div className="space-y-3">
          {pricing.options.map((option) => (
            <div
              key={option.label}
              className={`rounded-xl border p-4.5 transition-all ${
                option.highlight
                  ? "border-foreground/30 bg-foreground/[0.04] shadow-sm"
                  : "border-border bg-card/40"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-foreground">{option.label}</p>
                <p className="text-sm font-mono text-foreground font-light whitespace-nowrap">
                  {option.price}
                  {option.period && <span className="text-muted-foreground text-xs ml-1">{option.period}</span>}
                </p>
              </div>
              {option.details && (
                <ul className="mt-3 space-y-1.5 pt-2 border-t border-border/40">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-muted-foreground font-light">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {pricing.notes && (
          <p className="mt-4 text-xs text-muted-foreground font-light leading-relaxed">{pricing.notes}</p>
        )}
      </div>

      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-foreground text-background text-xs font-medium tracking-wide hover:bg-foreground/90 transition-all duration-200 hover:-translate-y-px active:scale-95 shadow-sm"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
          Solicitar proposta
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
