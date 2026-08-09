"use client";

import { CheckCircle2 } from "lucide-react";
import { getPricingForProduct } from "@/data/pricing";

const PricingCard = ({ slug }: { slug: string }) => {
  const pricing = getPricingForProduct(slug);

  if (!pricing) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-border bg-foreground/[0.015] p-7 space-y-7 sticky top-28">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
          Preços e modelos
        </p>
        <div className="space-y-3">
          {pricing.options.map((option) => (
            <div
              key={option.label}
              className={`rounded-xl border p-4 ${
                option.highlight
                  ? "border-foreground/30 bg-foreground/[0.03]"
                  : "border-border bg-background"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium text-foreground">{option.label}</p>
                <p className="text-sm font-mono text-foreground/80 whitespace-nowrap">
                  {option.price}
                  {option.period && <span className="text-muted-foreground">{option.period}</span>}
                </p>
              </div>
              {option.details && (
                <ul className="mt-2 space-y-1">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-foreground/65">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-foreground/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {pricing.notes && (
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{pricing.notes}</p>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
