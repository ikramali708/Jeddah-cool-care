const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const WhatsAppIcon = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2zm5.8 14c-.25.7-1.4 1.3-1.95 1.35-.5.05-1.1.2-3.6-.8-3-1.2-4.9-4.3-5.05-4.5-.15-.2-1.2-1.6-1.2-3s.75-2.1 1-2.4c.25-.3.55-.35.75-.35h.55c.2 0 .4 0 .6.5s.85 2.05.9 2.2c.1.15.1.35 0 .55-.1.2-.15.3-.3.5l-.45.5c-.15.15-.3.3-.15.6.15.25.7 1.15 1.5 1.85 1 .9 1.9 1.2 2.15 1.3.3.15.45.1.6-.1.2-.2.7-.8.9-1.1.2-.3.35-.25.6-.15l1.9.9c.25.1.45.2.5.3.1.15.1.7-.1 1.35z" />
  </svg>
);

export const SnapIcon = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12.2 2c2.6 0 4.7 1.6 5.2 4.2.1.7.1 1.6.1 2.5.3.1.7 0 1-.1.4-.1.9.1 1 .5.1.4-.2.7-.6.9-.5.2-1.2.3-1.3.7-.1.3.1.6.3.9.7 1.2 1.7 2 2.8 2.3.3.1.5.3.4.6-.2.5-.9.8-1.7 1-.2 0-.3.2-.4.6 0 .3-.2.5-.6.5-.6 0-1.2-.2-2 0-1 .2-1.6 1.7-3.8 1.7s-2.8-1.5-3.8-1.7c-.8-.2-1.4 0-2 0-.4 0-.6-.2-.6-.5-.1-.4-.2-.6-.4-.6-.8-.2-1.5-.5-1.7-1-.1-.3.1-.5.4-.6 1.1-.3 2.1-1.1 2.8-2.3.2-.3.4-.6.3-.9-.1-.4-.8-.5-1.3-.7-.4-.2-.7-.5-.6-.9.1-.4.6-.6 1-.5.3.1.7.2 1 .1 0-.9 0-1.8.1-2.5C7.5 3.6 9.6 2 12.2 2z" />
  </svg>
);

export const InstaIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={2.4} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const StarIcon = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2l3 6.9 7.5.7-5.6 5 1.7 7.4L12 18l-6.6 4 1.7-7.4-5.6-5L9 8.9z" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const SnowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17M9 4l3 2 3-2M9 20l3-2 3 2" />
  </svg>
);

/* service icons */
export const ServiceIcon = ({ name, ...p }) => {
  switch (name) {
    case "ac":
      return (
        <svg {...base} {...p}>
          <rect x="3" y="4" width="18" height="8" rx="2" />
          <path d="M7 8h6M16 8h1" />
          <path d="M7 15c0 1.2-.8 1.8-.8 3M12 15c0 1.2-.8 1.8-.8 3M17 15c0 1.2-.8 1.8-.8 3" />
        </svg>
      );
    case "gas":
      return (
        <svg {...base} {...p}>
          <rect x="8" y="6" width="8" height="15" rx="3" />
          <path d="M10 3h4v3h-4zM12 11v4M10 13h4" />
        </svg>
      );
    case "install":
      return (
        <svg {...base} {...p}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.1-.6-.6-2.1z" />
        </svg>
      );
    case "fridge":
      return (
        <svg {...base} {...p}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M6 10h12M9 6v1M9 13v3" />
        </svg>
      );
    case "washer":
      return (
        <svg {...base} {...p}>
          <rect x="3" y="2" width="18" height="20" rx="2" />
          <circle cx="12" cy="14" r="5" />
          <path d="M7 6h.01M10 6h.01M10 14c1-1 2-1 4 0" />
        </svg>
      );
    default:
      return <SnowIcon {...p} />;
  }
};
