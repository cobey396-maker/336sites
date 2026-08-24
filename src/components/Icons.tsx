import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Shared stroke settings — keeps every icon optically consistent. */
function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const LayoutIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M3 9h18M9 21V9" />
  </Base>
);

export const CartIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M2.5 3h2.2l2.2 11.2a1.6 1.6 0 0 0 1.6 1.3h8.7a1.6 1.6 0 0 0 1.6-1.3L21 7H5.4" />
  </Base>
);

export const SearchIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.9-4.9" />
  </Base>
);

export const WrenchIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.6 6.6a4.5 4.5 0 0 0 5.9 5.9l-8.2 8.2a2.4 2.4 0 0 1-3.4-3.4Z" />
    <path d="M14.6 6.6 17.8 3.4a4.5 4.5 0 0 0-5.9 5.9" />
  </Base>
);

export const PenIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20h9" />
    <path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7.5 18.5 3.5 19.5l1-4Z" />
  </Base>
);

export const GaugeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 18a9 9 0 1 1 17 0" />
    <path d="m14.8 10.2-3.3 4.1" />
    <circle cx="12" cy="15" r="1.4" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base strokeWidth={2.2} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.2 3.5h3l1.5 3.8-2 1.4a12.5 12.5 0 0 0 6.6 6.6l1.4-2 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8A16.8 16.8 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
  </Base>
);

export const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base strokeWidth={1.9} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base strokeWidth={1.9} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Base>
);

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 8.5h2.3V5.2h-2.6c-2.2 0-3.7 1.5-3.7 3.8v1.8H8.2v3.3h2.3V21h3.4v-6.9h2.4l.5-3.3h-2.9V9.5c0-.6.3-1 1-1Z" />
  </Base>
);

export const LinkedinIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7.5 10.5V17M7.5 7.4v.1M11.5 17v-3.6a2.1 2.1 0 0 1 4.2 0V17" />
  </Base>
);

export const serviceIcons = {
  layout: LayoutIcon,
  cart: CartIcon,
  search: SearchIcon,
  wrench: WrenchIcon,
  pen: PenIcon,
  gauge: GaugeIcon,
} as const;
