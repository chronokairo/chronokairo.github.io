const ReactIcon = () => (
  <g transform="translate(300, 12)">
    <circle cx="16" cy="16" r="5" fill="#61DAFB" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(0 16 16)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 16 16)" />
  </g>
);

const OllamaIcon = () => (
  <g transform="translate(332, 12)">
    <rect width="32" height="32" rx="8" fill="#111827" />
    <path d="M8 22 C8 16 12 10 16 10 C20 10 24 16 24 22" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="18" r="2" fill="#10B981" />
    <circle cx="20" cy="18" r="2" fill="#10B981" />
    <path d="M12 24 C14 26 18 26 20 24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
  </g>
);

const RAGIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#rag-grad)" width="400" height="250" />
    <rect x="100" y="30" width="200" height="180" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="100" y="30" width="200" height="35" rx="12" fill="currentColor" fillOpacity="0.08" />
    <circle cx="125" cy="47" r="10" fill="currentColor" fillOpacity="0.2" />
    <text x="145" y="52" fontSize="10" fill="currentColor" fillOpacity="0.5" fontWeight="bold">CK RAG AI</text>
    <rect x="115" y="80" width="100" height="25" rx="12" fill="currentColor" fillOpacity="0.1" />
    <rect x="120" y="88" width="60" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="120" y="96" width="40" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="185" y="115" width="100" height="35" rx="12" fill="#8B5CF6" fillOpacity="0.2" />
    <rect x="195" y="123" width="80" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="195" y="131" width="60" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="195" y="139" width="70" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="115" y="160" width="80" height="25" rx="12" fill="currentColor" fillOpacity="0.1" />
    <rect x="120" y="168" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <circle cx="50" cy="125" r="30" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
    <path d="M35 125 Q50 110 65 125 Q50 140 35 125" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    <circle cx="45" cy="120" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="55" cy="120" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="50" cy="130" r="3" fill="currentColor" fillOpacity="0.3" />
    <line x1="80" y1="125" x2="100" y2="125" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4" />
    <ellipse cx="350" cy="100" rx="25" ry="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="325" y="100" width="50" height="40" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
    <ellipse cx="350" cy="140" rx="25" ry="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
    <line x1="300" y1="120" x2="325" y2="120" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4" />
    <ReactIcon />
    <OllamaIcon />
  </svg>
);

export default RAGIllustration;
