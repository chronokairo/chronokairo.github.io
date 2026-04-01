const FlutterIcon = () => (
  <g transform="translate(310, 15)">
    <polygon points="0,32 20,12 34,26 14,46" fill="#02569B" />
    <polygon points="0,60 14,46 34,66 20,80" fill="#0175C2" />
    <polygon points="14,46 34,26 48,40 28,60" fill="#13B9FD" />
  </g>
);

const FirebaseIcon = () => (
  <g transform="translate(340, 12)">
    <polygon points="10,5 22,32 4,32" fill="#FFCA28" />
    <polygon points="10,5 14,18 4,32" fill="#FFA000" />
    <polygon points="14,18 22,32 4,32" fill="#F57C00" />
  </g>
);

const SSHIcon = () => (
  <g transform="translate(365, 12)">
    <rect x="0" y="4" width="28" height="24" rx="6" fill="#111827" />
    <path d="M8 16 L14 12 L14 14 L20 14 L20 18 L14 18 L14 20 Z" fill="#10B981" />
  </g>
);

const SGRIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sgr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#sgr-grad)" width="400" height="250" />
    <rect x="170" y="90" width="60" height="40" rx="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.3" />
    <rect x="178" y="100" width="8" height="3" rx="1" fill="#22C55E" fillOpacity="0.8" />
    <rect x="190" y="100" width="8" height="3" rx="1" fill="#22C55E" fillOpacity="0.8" />
    <rect x="202" y="100" width="8" height="3" rx="1" fill="#FFCA28" fillOpacity="0.8" />
    <rect x="214" y="100" width="8" height="3" rx="1" fill="#22C55E" fillOpacity="0.8" />
    <text x="200" y="120" fontSize="8" fill="currentColor" fillOpacity="0.5" textAnchor="middle" fontWeight="bold">MikroTik</text>
    <rect x="50" y="150" width="50" height="35" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
    <text x="75" y="172" fontSize="8" fill="currentColor" fillOpacity="0.5" textAnchor="middle" fontWeight="bold">OLT</text>
    <circle cx="60" cy="158" r="3" fill="#22C55E" fillOpacity="0.8" />
    <circle cx="72" cy="158" r="3" fill="#22C55E" fillOpacity="0.8" />
    <circle cx="84" cy="158" r="3" fill="#22C55E" fillOpacity="0.8" />
    <line x1="100" y1="167" x2="170" y2="115" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
    <circle cx="320" cy="70" r="20" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="310" y="65" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="315" y="79" width="10" height="3" rx="1" fill="currentColor" fillOpacity="0.1" />
    <circle cx="320" cy="140" r="20" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="310" y="135" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="315" y="149" width="10" height="3" rx="1" fill="currentColor" fillOpacity="0.1" />
    <circle cx="320" cy="210" r="20" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="310" y="205" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="315" y="219" width="10" height="3" rx="1" fill="currentColor" fillOpacity="0.1" />
    <line x1="230" y1="105" x2="300" y2="70" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4" />
    <line x1="230" y1="115" x2="300" y2="140" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4" />
    <line x1="215" y1="130" x2="300" y2="210" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4" />
    <rect x="40" y="40" width="80" height="60" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.15" />
    <text x="80" y="55" fontSize="8" fill="currentColor" fillOpacity="0.4" textAnchor="middle">Monitor</text>
    <path d="M50 85 L60 75 L70 80 L80 65 L90 70 L100 60 L110 68" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M50 88 L60 82 L70 85 L80 78 L90 83 L100 76 L110 80" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="55" cy="190" r="8" fill="#22C55E" fillOpacity="0.2" />
    <circle cx="55" cy="190" r="4" fill="#22C55E" fillOpacity="0.8" />
    <text x="70" y="193" fontSize="8" fill="currentColor" fillOpacity="0.4">Online: 127</text>
    <circle cx="55" cy="210" r="8" fill="#EF4444" fillOpacity="0.2" />
    <circle cx="55" cy="210" r="4" fill="#EF4444" fillOpacity="0.8" />
    <text x="70" y="213" fontSize="8" fill="currentColor" fillOpacity="0.4">Offline: 3</text>
    <FlutterIcon />
    <FirebaseIcon />
    <SSHIcon />
  </svg>
);

export default SGRIllustration;
