import { useEffect, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

/** Таймер обратного отсчёта до торжества */
export default function Countdown({ targetDate }) {
  const [left, setLeft] = useState(() => diff(targetDate));

  useEffect(() => {
    const t = setInterval(() => setLeft(diff(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const units = [
    { label: "дней", value: left.days },
    { label: "часов", value: left.hours },
    { label: "минут", value: left.minutes },
    { label: "секунд", value: left.seconds },
  ];

  return (
    <div className="flex items-stretch justify-center gap-1.5 sm:gap-2">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-stretch">
          <div className="flex min-w-[58px] flex-col items-center rounded-lg border border-[#C8962E]/40 bg-[#7B1518] px-2 py-2 shadow-sm">
            <span className="font-display text-3xl font-bold leading-none text-[#F4E9D0] tabular-nums">
              {pad(u.value)}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-[#E0B45C]">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="self-center px-0.5 font-display text-2xl font-bold text-[#A41E22]">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
