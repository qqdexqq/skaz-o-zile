import { Shirt } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import AssetImage from "./AssetImage";
import { DRESS_CODE } from "../data/content";

/**
 * Дресс-код «Яркий а-ля рус»:
 *  - палитра без подписей (красный/белый/оранжевый/зелёный) — DRESS_CODE.palette
 *  - сетка фото-референсов нарядов — DRESS_CODE.looks (файлы в /public/assets/looks/)
 */
export default function DressCode() {
  return (
    <Section>
      <SectionTitle>
        <span className="text-4xl sm:text-5xl">Одеяния праздничные</span>
      </SectionTitle>

      <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-[#A41E22]">
        <Shirt size={20} />
        <p className="font-display text-2xl font-bold">Дресс-код: «{DRESS_CODE.title}»</p>
      </div>

      <p className="mb-6 text-center font-body text-[20px] leading-relaxed text-[#4a3f2f]">
        {DRESS_CODE.text}
      </p>

      {/* Палитра без подписей */}
      <div className="mb-7 flex items-center justify-center gap-4">
        {DRESS_CODE.palette.map((hex) => (
          <span
            key={hex}
            className="h-12 w-12 rounded-full border-2 border-[#1c1c1c]/10 shadow-inner sm:h-14 sm:w-14"
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>

      {/* Сетка образов — легко подменять .png в /public/assets/looks/ */}
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
        {DRESS_CODE.looks.map((look) => (
          <div
            key={look.src}
            className="aspect-[3/4] overflow-hidden rounded-xl border-2 border-[#C8962E]/40 shadow-sm"
          >
            <AssetImage src={look.src} alt={look.alt} className="h-full w-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
