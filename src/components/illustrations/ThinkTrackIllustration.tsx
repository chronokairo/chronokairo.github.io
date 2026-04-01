const ReactIcon = () => (
  <g transform="translate(20, 12)">
    <circle cx="12" cy="12" r="4" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="5" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="5" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="5" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)" />
  </g>
);

const TypeScriptIcon = () => (
  <g transform="translate(48, 12)">
    <rect width="28" height="28" rx="4" fill="#3178C6" />
    <text x="14" y="18" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">TS</text>
  </g>
);

const FirebaseIcon = () => (
  <g transform="translate(80, 12)">
    <polygon points="10,5 22,32 4,32" fill="#FFCA28" />
    <polygon points="10,5 14,18 4,32" fill="#FFA000" />
    <polygon points="14,18 22,32 4,32" fill="#F57C00" />
  </g>
);

const ThinkTrackIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#tt-grad)" width="400" height="250" />
    <rect x="30" y="40" width="340" height="170" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="45" y="55" width="95" height="140" rx="6" fill="currentColor" fillOpacity="0.05" />
    <text x="92" y="72" fontSize="9" fill="currentColor" fillOpacity="0.5" textAnchor="middle" fontWeight="bold">TO DO</text>
    <rect x="55" y="85" width="75" height="30" rx="4" fill="currentColor" fillOpacity="0.1" />
    <rect x="60" y="92" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="60" y="102" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="55" y="125" width="75" height="30" rx="4" fill="currentColor" fillOpacity="0.1" />
    <rect x="60" y="132" width="45" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="60" y="142" width="30" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="152" y="55" width="95" height="140" rx="6" fill="currentColor" fillOpacity="0.05" />
    <text x="199" y="72" fontSize="9" fill="currentColor" fillOpacity="0.5" textAnchor="middle" fontWeight="bold">IN PROGRESS</text>
    <rect x="162" y="85" width="75" height="30" rx="4" fill="#FFCA28" fillOpacity="0.2" />
    <rect x="167" y="92" width="55" height="4" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="167" y="102" width="40" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="259" y="55" width="95" height="140" rx="6" fill="currentColor" fillOpacity="0.05" />
    <text x="306" y="72" fontSize="9" fill="currentColor" fillOpacity="0.5" textAnchor="middle" fontWeight="bold">DONE</text>
    <rect x="269" y="85" width="75" height="30" rx="4" fill="#22C55E" fillOpacity="0.2" />
    <rect x="274" y="92" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="274" y="102" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="269" y="125" width="75" height="30" rx="4" fill="#22C55E" fillOpacity="0.2" />
    <rect x="274" y="132" width="45" height="4" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="274" y="142" width="30" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="269" y="165" width="75" height="30" rx="4" fill="#22C55E" fillOpacity="0.2" />
    <circle cx="370" cy="30" r="18" fill="currentColor" fillOpacity="0.1" />
    <circle cx="370" cy="30" r="10" fill="currentColor" fillOpacity="0.3" />
    <ReactIcon />
    <TypeScriptIcon />
    <FirebaseIcon />
  </svg>
);

export default ThinkTrackIllustration;
