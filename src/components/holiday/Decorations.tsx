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

/** A lit, snow-dusted tree. Tiers have curved skirts so it is not three triangles. */
export function ChristmasTree({ className = "" }: { className?: string }) {
  const tiers = [
    { d: "M60 18 L84 62 C74 68 66 63 60 68 C54 63 46 68 36 62 Z", snow: "M38 61 C47 66 54 63 60 66 C66 63 73 66 82 61" },
    { d: "M60 46 L94 100 C80 107 70 100 60 106 C50 100 40 107 26 100 Z", snow: "M28 99 C41 105 51 99 60 103 C69 99 79 105 92 99" },
    { d: "M60 78 L106 140 C88 148 73 140 60 146 C47 140 32 148 14 140 Z", snow: "M16 139 C33 146 48 139 60 144 C72 139 87 146 104 139" },
  ];
  const baubles = [
    { cx: 60, cy: 54, r: 3.4, c: "var(--color-berry)" },
    { cx: 46, cy: 86, r: 3.8, c: "var(--color-gold)" },
    { cx: 76, cy: 92, r: 3.6, c: "var(--color-mint-400)" },
    { cx: 38, cy: 124, r: 4, c: "var(--color-berry)" },
    { cx: 60, cy: 118, r: 3.6, c: "var(--color-mint-400)" },
    { cx: 84, cy: 128, r: 4, c: "var(--color-gold)" },
  ];

  return (
    <svg viewBox="0 0 120 172" className={className} aria-hidden="true" focusable="false">
      {/* snow mound the tree stands in */}
      <ellipse cx="60" cy="166" rx="42" ry="6" fill="var(--color-snow)" opacity="0.18" />
      <rect x="52" y="138" width="16" height="22" rx="3" fill="#6b4a2b" />

      {tiers.map((t, i) => (
        <g key={i}>
          <path d={t.d} fill={i === 0 ? "var(--color-teal-500)" : i === 1 ? "var(--color-teal-600)" : "var(--color-teal-700)"} />
          <path d={t.snow} fill="none" stroke="var(--color-snow)" strokeWidth="3.4" strokeLinecap="round" opacity="0.9" />
        </g>
      ))}

      {baubles.map((b, i) => (
        <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.c} className="twinkle" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* star */}
      <g className="twinkle">
        <path
          d="M60 0 L64.4 10.6 75.8 11.5 67.1 18.9 69.8 30 60 24 50.2 30 52.9 18.9 44.2 11.5 55.6 10.6 Z"
          fill="var(--color-gold)"
        />
        <circle cx="60" cy="15" r="13" fill="var(--color-gold-glow)" opacity="0.18" />
      </g>
    </svg>
  );
}

/** Gingerbread man with icing. Limbs are round-capped strokes, so he stays chunky. */
export function Gingerbread({ className = "" }: { className?: string }) {
  const dough = "#b9793c";
  const icing = "var(--color-snow)";
  return (
    <svg viewBox="0 0 104 126" className={className} aria-hidden="true" focusable="false">
      <g stroke={dough} strokeLinecap="round" fill="none">
        <line x1="52" y1="52" x2="52" y2="84" strokeWidth="30" />
        <line x1="24" y1="60" x2="80" y2="60" strokeWidth="17" />
        <line x1="36" y1="108" x2="48" y2="84" strokeWidth="16" />
        <line x1="68" y1="108" x2="56" y2="84" strokeWidth="16" />
      </g>
      <circle cx="52" cy="28" r="20" fill={dough} />

      {/* icing */}
      <g stroke={icing} strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M27 67 l4-4 4 4 4-4" />
        <path d="M69 67 l4-4 4 4 4-4" />
        <path d="M31 106 l4-4 4 4 4-4" />
        <path d="M61 106 l4-4 4 4 4-4" />
        <path d="M40 46 q12 7 24 0" />
      </g>

      {/* face */}
      <circle cx="45" cy="25" r="2.6" fill="#3b2412" />
      <circle cx="59" cy="25" r="2.6" fill="#3b2412" />
      <path d="M44 34 q8 6 16 0" stroke="#3b2412" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="52" cy="14" r="3.4" fill="var(--color-berry)" />

      {/* buttons */}
      <circle cx="52" cy="66" r="3.2" fill="var(--color-berry)" />
      <circle cx="52" cy="78" r="3.2" fill="var(--color-mint-400)" />
    </svg>
  );
}
