import type { SVGProps } from "react";

/**
 * Seasonal ornaments. All of them are decorative — each is aria-hidden and
 * none accepts pointer events, so they sit purely on top of the existing UI.
 */

const WIRE = { width: 750, arcs: 6, top: 4, sag: 26 };

/** Point on a quadratic Bezier at t. */
function quad(t: number, p0: number, c: number, p1: number) {
  const u = 1 - t;
  return u * u * p0 + 2 * u * t * c + t * t * p1;
}

/** Evenly spaced downward sags, so every bulb hangs off the wire it is on. */
function wireGeometry() {
  const { width, arcs, top, sag } = WIRE;
  const span = width / arcs;
  let d = `M0 ${top}`;
  const bulbs: { x: number; y: number }[] = [];

  for (let i = 0; i < arcs; i++) {
    const x0 = i * span;
    const x1 = x0 + span;
    const cx = x0 + span / 2;
    d += ` Q ${cx} ${sag} ${x1} ${top}`;
    // Three bulbs per arc, positioned on the curve itself.
    for (const t of [0.26, 0.5, 0.74]) {
      bulbs.push({ x: quad(t, x0, cx, x1), y: quad(t, top, sag, top) });
    }
  }
  return { d, bulbs };
}

const BULB_COLORS = ["var(--color-gold)", "var(--color-mint-400)", "var(--color-berry)"];

/** Bulbs strung along a sagging wire. Hangs from the bottom edge of the header. */
export function StringLights({ className = "" }: { className?: string }) {
  const { d, bulbs } = wireGeometry();

  return (
    <svg
      className={className}
      viewBox={`0 0 ${WIRE.width} 46`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={d}
        fill="none"
        stroke="var(--color-teal-700)"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      {bulbs.map((b, i) => {
        const color = BULB_COLORS[i % BULB_COLORS.length];
        return (
          <g key={i} className="twinkle" style={{ animationDelay: `${(i % 7) * 0.33}s` }}>
            <line
              x1={b.x}
              y1={b.y}
              x2={b.x}
              y2={b.y + 5}
              stroke="var(--color-teal-700)"
              strokeWidth="1.1"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={b.x} cy={b.y + 9.5} r="6" fill={color} opacity="0.22" />
            <circle cx={b.x} cy={b.y + 9.5} r="3.2" fill={color} />
          </g>
        );
      })}
    </svg>
  );
}

/** Two holly leaves and three berries. Used beside the logo and headings. */
export function HollySprig({ className = "", ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 34 26" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M3 14c3-6 8-9 13-9-1 4-3 6-5 7 3 0 6 1 8 3-4 2-9 2-13 0-1 0-2-1-3-1Z"
        fill="var(--color-teal-700)"
      />
      <path
        d="M31 9c-3 5-8 8-13 8 1-4 3-6 5-7-3 0-6-1-8-3 4-2 9-2 13 0 1 1 2 1 3 2Z"
        fill="var(--color-teal-600)"
      />
      <circle cx="17" cy="19" r="3" fill="var(--color-berry)" />
      <circle cx="22.5" cy="21" r="2.4" fill="var(--color-berry-deep)" />
      <circle cx="12" cy="21.5" r="2.2" fill="var(--color-berry-deep)" />
    </svg>
  );
}

/** A hanging bauble. `drop` is how far below its anchor the ball sits. */
export function Ornament({
  color = "var(--color-berry)",
  drop = 54,
  className = "",
}: {
  color?: string;
  drop?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 26 90"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ overflow: "visible" }}
    >
      <line x1="13" y1="0" x2="13" y2={drop - 8} stroke="var(--color-teal-600)" strokeWidth="1.2" />
      <rect x="10" y={drop - 9} width="6" height="5" rx="1.5" fill="var(--color-gold)" />
      <circle cx="13" cy={drop + 5} r="9" fill={color} />
      <circle cx="10" cy={drop + 2} r="2.6" fill="#ffffff" opacity="0.45" />
    </svg>
  );
}

/** Snow piled along the top edge of a block. Stretches to any width. */
const CAP_PATH = (() => {
  // Irregular but deterministic mounds, so server and client render the same.
  const w = 400;
  const h = 24;
  const bumps = [7, 13, 9, 16, 6, 12, 18, 8, 14, 10, 15, 7];
  const step = w / bumps.length;
  let d = `M0 ${h} V${h - bumps[0]}`;
  bumps.forEach((peak, i) => {
    const x0 = i * step;
    const next = bumps[(i + 1) % bumps.length];
    d += ` Q ${x0 + step / 2} ${h - peak - 5} ${x0 + step} ${h - next}`;
  });
  return `${d} V${h} Z`;
})();

export function SnowCap({
  className = "",
  fill = "var(--color-snow)",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={CAP_PATH} fill={fill} />
    </svg>
  );
}

/** A six-point flake. */
export function Snowflake({ className = "", ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...rest}>
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        transform="translate(12 12)"
      >
        {[0, 60, 120].map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <line x1="0" y1="-9.5" x2="0" y2="9.5" />
            <path d="M-2.6 -6.4 0 -9.5l2.6 3.1M-2.6 6.4 0 9.5l2.6-3.1" />
          </g>
        ))}
      </g>
    </svg>
  );
}
