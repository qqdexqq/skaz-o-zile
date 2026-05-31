// Декоративные SVG-орнаменты в стиле городецкой росписи.
// Розаны с многослойными лепестками, «оживкой» (белые штрихи), листья и завитки.
// Легко перекрашиваются через палитру C.

const C = {
  red: "#B0212A",
  redD: "#7B1518",
  redDD: "#5C0F12",
  gold: "#C8962E",
  goldL: "#E6BE63",
  cream: "#F7EFD8",
  white: "#FBF6E7",
  leaf: "#356B2F",
  leafD: "#234A20",
  leafL: "#5C9447",
  blue: "#2B4B8C",
};

/* ── Базовые элементы росписи ───────────────────────────── */

function Rose({ cx = 0, cy = 0, R = 15, petal = C.red, inner = C.redDD, core = C.gold, np = 12 }) {
  const petals = Array.from({ length: np }, (_, i) => {
    const a = (2 * Math.PI * i) / np;
    return { x: Math.cos(a) * R * 0.74, y: Math.sin(a) * R * 0.74 };
  });
  const oz = Array.from({ length: 7 }, (_, k) => {
    const a = ((150 + k * 30) * Math.PI) / 180;
    return { x: Math.cos(a) * R * 0.62, y: Math.sin(a) * R * 0.62 };
  });
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle r={R * 1.04} fill={C.redDD} opacity="0.25" />
      {petals.map((p, i) => (
        <circle key={`p${i}`} cx={p.x} cy={p.y} r={R * 0.3} fill={petal} />
      ))}
      <circle r={R * 0.8} fill={petal} />
      {petals.map((p, i) => (
        <circle key={`s${i}`} cx={p.x} cy={p.y} r={R * 0.3} fill="none" stroke={C.redD} strokeWidth={R * 0.05} opacity="0.6" />
      ))}
      <circle r={R * 0.5} fill={inner} />
      <circle r={R * 0.5} fill="none" stroke={C.redDD} strokeWidth={R * 0.04} />
      <circle cy={-R * 0.04} r={R * 0.24} fill={core} />
      <circle cy={-R * 0.04} r={R * 0.24} fill="none" stroke={C.redDD} strokeWidth={R * 0.03} opacity="0.5" />
      {oz.map((p, i) => (
        <circle key={`o${i}`} cx={p.x} cy={p.y} r={R * 0.055} fill={C.white} />
      ))}
      <circle cx={-R * 0.07} cy={-R * 0.1} r={R * 0.05} fill={C.white} />
    </g>
  );
}

function Leaf({ x, y, rot = 0, scale = 1, fill = C.leaf }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rot}) scale(${scale})`}>
      <path d="M0 0 Q14 -11 30 0 Q14 11 0 0 Z" fill={fill} stroke={C.leafD} strokeWidth="1" />
      <path d="M3 0 Q15 -3 27 0" fill="none" stroke={C.leafD} strokeWidth="0.8" opacity="0.7" />
    </g>
  );
}

function Bud({ x, y, rot = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rot}) scale(${scale})`}>
      <circle r="7" fill={C.red} />
      <path d="M-7 0 A7 7 0 0 1 7 0 Z" fill={C.redD} />
      <circle cy="-1" r="2.4" fill={C.gold} />
      <circle cx="-1.5" cy="-2" r="1" fill={C.white} />
    </g>
  );
}

/* ── Экспорты ────────────────────────────────────────────── */

/** Геометрическая лента — верхний бордюр (повторяющийся узор) */
export function CrossStitchBand({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 18" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="csband" width="24" height="18" patternUnits="userSpaceOnUse">
          <rect width="24" height="18" fill={C.cream} />
          <rect width="24" height="1.4" y="0.6" fill={C.red} />
          <rect width="24" height="1.4" y="16" fill={C.red} />
          <path d="M12 3.5 L17.5 9 L12 14.5 L6.5 9 Z" fill={C.red} />
          <path d="M12 6 L15 9 L12 12 L9 9 Z" fill={C.goldL} />
          <circle cx="12" cy="9" r="1.1" fill={C.cream} />
          <circle cx="2" cy="9" r="1.7" fill={C.redD} />
          <circle cx="22" cy="9" r="1.7" fill={C.redD} />
        </pattern>
      </defs>
      <rect width="120" height="18" fill="url(#csband)" />
    </svg>
  );
}

/** Цветочная гирлянда — крупный декоративный бордюр */
export function FloralGarland({ className = "" }) {
  const leaves = [
    [52, 58, -25, 1.0, C.leafL],
    [120, 72, 18, 0.9, C.leaf],
    [150, 42, 200, 0.85, C.leafL],
    [236, 42, -20, 0.85, C.leafL],
    [264, 72, 162, 0.9, C.leaf],
    [312, 58, 205, 1.0, C.leafL],
  ];
  return (
    <svg className={className} viewBox="0 0 360 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 64 C 70 30 110 86 180 52 C 250 86 290 30 352 64" fill="none" stroke={C.leaf} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M180 52 C 150 70 120 78 96 66" fill="none" stroke={C.leaf} strokeWidth="2" strokeLinecap="round" />
      <path d="M180 52 C 210 70 240 78 264 66" fill="none" stroke={C.leaf} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 64 q-6 8 2 12 q6 2 6 -4" fill="none" stroke={C.leaf} strokeWidth="2" strokeLinecap="round" />
      <path d="M352 64 q6 8 -2 12 q-6 2 -6 -4" fill="none" stroke={C.leaf} strokeWidth="2" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <Leaf key={i} x={l[0]} y={l[1]} rot={l[2]} scale={l[3]} fill={l[4]} />
      ))}
      <Bud x={40} y={60} rot={-30} />
      <Bud x={326} y={60} rot={30} />
      <Rose cx={96} cy={58} R={15} core={C.blue} />
      <Rose cx={264} cy={58} R={15} core={C.blue} />
      <Rose cx={180} cy={48} R={21} core={C.gold} />
    </svg>
  );
}

/** Разделитель-завиток между секциями */
export function Divider({ className = "" }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg viewBox="0 0 160 28" className="w-44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="6" y1="14" x2="54" y2="14" stroke={C.red} strokeWidth="1.2" opacity="0.7" />
        <line x1="106" y1="14" x2="154" y2="14" stroke={C.red} strokeWidth="1.2" opacity="0.7" />
        <circle cx="46" cy="14" r="2.4" fill={C.red} />
        <circle cx="114" cy="14" r="2.4" fill={C.red} />
        <path d="M58 14 q8 -10 16 -4" fill="none" stroke={C.leaf} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M102 14 q-8 -10 -16 -4" fill="none" stroke={C.leaf} strokeWidth="1.6" strokeLinecap="round" />
        <Leaf x={66} y={12} rot={-40} scale={0.5} fill={C.leafL} />
        <Leaf x={94} y={12} rot={220} scale={0.5} fill={C.leafL} />
        <Rose cx={80} cy={14} R={9} core={C.gold} np={10} />
      </svg>
    </div>
  );
}
