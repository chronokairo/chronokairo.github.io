const FlutterIcon = () => (
  <g transform="translate(24, 80)">
    <polygon points="0,32 20,12 34,26 14,46" fill="#02569B" />
    <polygon points="0,60 14,46 34,66 20,80" fill="#0175C2" />
    <polygon points="14,46 34,26 48,40 28,60" fill="#13B9FD" />
  </g>
);

const DartIcon = () => (
  <g transform="translate(24, 132)">
    <polygon points="0,20 18,0 50,12 30,32" fill="#00B4AB" />
    <polygon points="0,20 0,50 30,70 30,32" fill="#0075C9" />
    <polygon points="30,32 50,12 50,44 30,70" fill="#00D2B8" />
  </g>
);

const CRMIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#crm-grad)" width="400" height="250" />
    <rect x="140" y="20" width="120" height="210" rx="16" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
    <rect x="148" y="35" width="104" height="180" rx="4" fill="currentColor" fillOpacity="0.08" />
    <rect x="148" y="35" width="104" height="30" rx="4" fill="currentColor" fillOpacity="0.1" />
    <text x="200" y="55" fontSize="10" fill="currentColor" fillOpacity="0.6" textAnchor="middle" fontWeight="bold">CRM</text>
    <rect x="155" y="75" width="90" height="35" rx="6" fill="currentColor" fillOpacity="0.1" />
    <circle cx="172" cy="92" r="10" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="85" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="95" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="155" y="118" width="90" height="35" rx="6" fill="currentColor" fillOpacity="0.1" />
    <circle cx="172" cy="135" r="10" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="128" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="138" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="155" y="161" width="90" height="35" rx="6" fill="currentColor" fillOpacity="0.1" />
    <circle cx="172" cy="178" r="10" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="171" width="50" height="4" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="188" y="181" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="280" y="60" width="90" height="70" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <path d="M295 110 L310 95 L325 105 L340 80 L355 90" stroke="#02569B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <FlutterIcon />
    <DartIcon />
  </svg>
);

export default CRMIllustration;
