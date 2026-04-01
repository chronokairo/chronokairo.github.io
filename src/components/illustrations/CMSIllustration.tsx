const ReactIcon = () => (
  <g transform="translate(300, 12)">
    <circle cx="16" cy="16" r="5" fill="#61DAFB" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(0 16 16)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 16 16)" />
  </g>
);

const TypeScriptIcon = () => (
  <g transform="translate(330, 12)">
    <rect width="32" height="32" rx="4" fill="#3178C6" />
    <text x="16" y="21" fontSize="14" fontWeight="700" fill="white" textAnchor="middle">TS</text>
  </g>
);

const CMSIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cms-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#cms-grad)" width="400" height="250" />
    <rect x="30" y="30" width="340" height="190" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
    <rect x="30" y="30" width="60" height="190" rx="8" fill="currentColor" fillOpacity="0.08" />
    <circle cx="60" cy="55" r="12" fill="currentColor" fillOpacity="0.15" />
    <rect x="45" y="80" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="45" y="95" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="45" y="110" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="45" y="125" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="105" y="45" width="250" height="25" rx="4" fill="currentColor" fillOpacity="0.08" />
    <rect x="105" y="85" width="75" height="55" rx="6" fill="currentColor" fillOpacity="0.1" />
    <rect x="190" y="85" width="75" height="55" rx="6" fill="currentColor" fillOpacity="0.1" />
    <rect x="275" y="85" width="75" height="55" rx="6" fill="currentColor" fillOpacity="0.1" />
    <rect x="105" y="155" width="245" height="50" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <line x1="105" y1="175" x2="350" y2="175" stroke="currentColor" strokeOpacity="0.1" />
    <line x1="105" y1="190" x2="350" y2="190" stroke="currentColor" strokeOpacity="0.1" />
    <ReactIcon />
    <TypeScriptIcon />
  </svg>
);

export default CMSIllustration;
