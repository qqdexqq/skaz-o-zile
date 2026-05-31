import { CrossStitchBand, FloralGarland } from "./Ornaments";
import AssetImage from "./AssetImage";
import { EVENT } from "../data/content";

/** Hero: орнаментальная шапка, дата, заголовок, подзаголовок и портрет */
export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <CrossStitchBand className="h-4 w-full" />
      <FloralGarland className="mx-auto -mt-1 w-full max-w-md" />

      {/* Дата мероприятия */}
      <p className="px-6 pt-2 text-center font-accent text-xl font-semibold uppercase tracking-[0.25em] text-[#A41E22]">
        {EVENT.dateLabel}
      </p>

      {/* Заголовок + подзаголовок */}
      <div className="px-6 pb-5 pt-2 text-center">
        <h1 className="font-display text-5xl font-bold leading-[1.05] text-[#1c1c1c] sm:text-6xl">
          {EVENT.title}
          <br />
          {EVENT.titleSecond}
        </h1>
        <p className="mt-4 font-accent text-2xl italic text-[#7B1518]">
          {EVENT.subtitle}
        </p>
      </div>

      {/* Портрет. Замените файл: /public/assets/portrait.png */}
      <div className="px-6 pb-9">
        <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border-2 border-[#C8962E]/50 shadow-lg">
          <AssetImage
            src={EVENT.portrait}
            alt="Зиля Прекрасная"
            rounded="rounded-2xl"
            className="h-full w-full"
          />
        </div>
      </div>
    </header>
  );
}
