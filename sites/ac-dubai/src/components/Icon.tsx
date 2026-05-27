type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  plug: <><path d="M9 2v6" /><path d="M15 2v6" /><path d="M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z" /><path d="M12 18v4" /></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3Z" /></>,
  gauge: <><path d="M12 14V8" /><circle cx="12" cy="14" r="9" /></>,
  sparkles: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>,
  wind: <><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 16h15a3 3 0 1 1-3 3" /><path d="M3 12h7" /></>,
  snowflake: <><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" /></>,
  blueprint: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></>,
  siren: <><path d="M7 12a5 5 0 0 1 10 0v5H7v-5Z" /><path d="M5 17h14M12 4V2" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" /></>,
  flask: <><path d="M9 3h6v4l4 11a3 3 0 0 1-2.8 4H7.8A3 3 0 0 1 5 18L9 7Z" /><path d="M7 14h10" /></>,
  star: <><path d="M12 17.3l-6.2 3.6 1.6-7L2 8.8l7.1-.6L12 1.5l2.9 6.7 7.1.6-5.4 5.1 1.6 7Z" /></>,
  phone: <><path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></>,
  whatsapp: <><path d="M3 21l1.6-4.5A8 8 0 1 1 7.5 19.4L3 21Z" /><path d="M9 9c.5 2 2 3.5 4 4l1.5-1.5 2.5 1V14a2 2 0 0 1-2 2 8 8 0 0 1-7.5-7.5 2 2 0 0 1 2-2h1.5l1 2.5L9 10Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <><path d="M4 12l5 5L20 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  arrowRight: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
  verified: <><path d="M12 2l2.5 2 3-1 1 3 3 1.5-1 3 1 3-3 1.5-1 3-3-1-2.5 2-2.5-2-3 1-1-3-3-1.5 1-3-1-3 3-1.5 1-3 3 1L12 2Z" /><path d="M9 12l2 2 4-4" /></>,
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name] ?? null}
    </svg>
  );
}
