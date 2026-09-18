import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon, WhatsAppIcon } from "@/components/BrandIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const social = [
    { icon: WhatsAppIcon, href: "https://wa.me/5592981244044", label: "WhatsApp" },
    { icon: GitHubIcon, href: "https://github.com/chronokairo", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/company/chronokairo", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/chronokairo", label: "Instagram" },
    { icon: XIcon, href: "https://x.com/chronokairo", label: "X" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand — Chronokairo */}
          <div className="text-center md:text-left">
            <span className="text-sm font-light text-white tracking-[-0.01em]">
              Chrono<em className="not-italic font-extralight text-white/55">kairo</em>
            </span>
            <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mt-1">
              Tecnologia no tempo certo
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-white/50"
              >
                <item.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-white/30 font-mono">
            © {currentYear} Chronokairo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
