import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const owners = [
    {
      name: "Luan Nery",
      role: "Cientista da Computação",
      bio: "Liderança técnica e desenvolvimento de soluções.",
      initials: "LN",
      github: "https://github.com/lu4nn3ry",
      avatar: "https://avatars.githubusercontent.com/lu4nn3ry",
    },
    {
      name: "Riad Makarem",
      role: "Cientista da Computação",
      bio: "Arquitetura de sistemas e backend.",
      initials: "RM",
      github: "https://github.com/Riadmakarem",
      avatar: "https://avatars.githubusercontent.com/Riadmakarem",
    },
    {
      name: "Victor Martins",
      role: "Cientista da Computação",
      bio: "Gestão de projetos e desenvolvimento.",
      initials: "VM",
      github: "https://github.com/VictorMartins086",
      avatar: "https://avatars.githubusercontent.com/VictorMartins086",
    },
  ];

  const developers = [
    {
      name: "Pedro Isaque",
      role: "Analista de Sistemas",
      bio: "Desenvolvimento Web.",
      initials: "PI",
      github: "https://github.com/Isaqueodev",
      avatar: "https://avatars.githubusercontent.com/Isaqueodev",
    },
    {
      name: "Jordan Cunha",
      role: "Cientista da Computação",
      bio: "Desenvolvimento Mobile e Web.",
      initials: "JC",
      github: "https://github.com/JORD4N-01",
      avatar: "https://avatars.githubusercontent.com/JORD4N-01",
    },
    {
      name: "Mikhael",
      role: "Analista de Sistemas",
      bio: "Automação N8N.",
      initials: "MK",
      github: "https://github.com/UmTalDeMike",
      avatar: "https://avatars.githubusercontent.com/UmTalDeMike",
    },
    {
      name: "Erick",
      role: "Cientista da Computação",
      bio: "Desenvolvimento Mobile e Web.",
      initials: "ER",
      github: "https://github.com/ZeroErick",
      avatar: "https://avatars.githubusercontent.com/ZeroErick",
    },
  ];

  const MemberCard = ({ member }: { member: typeof owners[0] }) => (
    <div className="group text-center">
      {/* Avatar */}
      <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
        <div className="absolute inset-0 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-500 overflow-hidden">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        {/* Hover ring */}
        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-foreground/30 transition-colors duration-500" />
      </div>

      {/* Info */}
      <h3 className="text-base md:text-lg font-serif font-bold mb-1 text-foreground">{member.name}</h3>
      <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{member.role}</p>
      <p className="text-xs md:text-sm text-muted-foreground/70 mb-3 md:mb-4 px-2 md:px-4 line-clamp-2 leading-relaxed">{member.bio}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a 
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
        >
          <Github className="w-3.5 h-3.5" />
        </a>
        <a 
          href="#" 
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a 
          href="#" 
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Equipe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
            Nosso <span className="font-normal italic">time</span>
          </h2>
          <p className="text-foreground/80 text-sm">
            Profissionais dedicados que transformam ideias em realidade digital.
          </p>
        </div>

        {/* Owners Section */}
        <div className="mb-20">
          <h3 className="text-center text-xs font-mono tracking-[0.25em] text-muted-foreground mb-10 uppercase">
            // Fundadores
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 lg:gap-16 max-w-3xl">
              {owners.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md mx-auto h-px bg-border mb-16" />

        {/* Developers Section */}
        <div>
          <h3 className="text-center text-xs font-mono tracking-[0.25em] text-muted-foreground mb-10 uppercase">
            // Desenvolvedores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {developers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
