"use client";

import { WhatsAppIcon } from "@/components/BrandIcons";

export function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href="https://wa.me/5592981244044?text=Ol%C3%A1%20Chronokairo!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp Oficial (+55 92 98124-4044)"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <WhatsAppIcon className="relative h-6 w-6 fill-white" />
        </span>
        <span className="font-semibold text-sm sm:text-base tracking-wide whitespace-nowrap drop-shadow-sm">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
