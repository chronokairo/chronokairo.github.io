const NextIcon = () => (
  <g transform="translate(300, 12)">
    <circle cx="16" cy="16" r="16" fill="#0B0B0F" />
    <path d="M10 10 H22 V22 H18 L12 14 V22 H10 Z" fill="white" />
  </g>
);

const TailwindIcon = () => (
  <g transform="translate(332, 12)">
    <rect width="32" height="32" rx="8" fill="#0EA5E9" />
    <path d="M8 14 C10 10 14 10 16 12 C18 14 20 14 24 12 C22 16 18 16 16 14 C14 12 12 12 8 14 Z" fill="white" />
    <path d="M8 22 C10 18 14 18 16 20 C18 22 20 22 24 20 C22 24 18 24 16 22 C14 20 12 20 8 22 Z" fill="white" />
  </g>
);

const TOTVSIcon = () => (
  <g transform="translate(365, 12)">
    <rect width="28" height="28" rx="14" fill="#0099CC" />
    <circle cx="14" cy="14" r="6" fill="white" />
    <rect x="13" y="9" width="2" height="10" fill="#0099CC" />
    <rect x="9" y="13" width="10" height="2" fill="#0099CC" />
  </g>
);

const CMSiteEduIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="edu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#edu-grad)" width="400" height="250" />
    {/* Hero section */}
    <rect x="30" y="40" width="340" height="70" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.15" />
    <rect x="45" y="55" width="200" height="14" rx="4" fill="currentColor" fillOpacity="0.12" />
    <rect x="45" y="75" width="160" height="10" rx="3" fill="currentColor" fillOpacity="0.1" />
    <rect x="260" y="55" width="90" height="40" rx="8" fill="#0EA5E9" fillOpacity="0.15" />
    
    {/* Cards */}
    <rect x="30" y="130" width="100" height="80" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <rect x="45" y="145" width="70" height="10" rx="3" fill="currentColor" fillOpacity="0.12" />
    <rect x="45" y="160" width="50" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    <rect x="45" y="175" width="60" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    
    <rect x="150" y="130" width="100" height="80" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <rect x="165" y="145" width="70" height="10" rx="3" fill="currentColor" fillOpacity="0.12" />
    <rect x="165" y="160" width="50" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    <rect x="165" y="175" width="60" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    
    <rect x="270" y="130" width="100" height="80" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <rect x="285" y="145" width="70" height="10" rx="3" fill="currentColor" fillOpacity="0.12" />
    <rect x="285" y="160" width="50" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    <rect x="285" y="175" width="60" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
    
    {/* Integration line */}
    <line x1="60" y1="115" x2="340" y2="115" stroke="#0EA5E9" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6 6" />
    <circle cx="200" cy="115" r="6" fill="#0EA5E9" fillOpacity="0.8" />
    <NextIcon />
    <TailwindIcon />
    <TOTVSIcon />
  </svg>
);

export default CMSiteEduIllustration;
