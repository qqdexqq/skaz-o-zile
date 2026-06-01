import { Gift, HeartHandshake, Flower2 } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import AssetImage from "./AssetImage";
import { GIFTS } from "../data/content";

/** Подарки и благотворительность: вишлист, просьба о добром деле, QR/СБП */
export default function Gifts() {
  return (
    <Section >
      <SectionTitle>
        <span className="text-3xl sm:text-4xl">Подарки и благотворительность</span>
      </SectionTitle>

      {/* Список желаний */}
      <div className="mx-auto mb-5 max-w-sm rounded-2xl border border-[#C8962E]/40 bg-[#F4E9D0]/90 p-6 text-center shadow-sm">
        <Gift className="mx-auto mb-2 text-[#A41E22]" size={26} />
        <p className="font-body text-[18px] leading-relaxed text-[#4a3f2f]">
          Яхонтовые мои! Ежели решите порадовать меня дарами — список желаний
          заветных найдёте по ссылке ниже.
        </p>
        <a
          href={GIFTS.wishlistUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#A41E22] px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-[#A41E22] transition hover:bg-[#A41E22] hover:text-[#F4E9D0] active:scale-95"
        >
          Список желанных подарков
        </a>
      </div>

      {/* Доброе дело + QR */}
      <div className="mx-auto max-w-sm rounded-2xl border border-[#C8962E]/40 bg-[#F4E9D0]/90 p-6 text-center shadow-sm">
        <HeartHandshake className="mx-auto mb-2 text-[#A41E22]" size={26} />
        <p className="font-body text-[18px] leading-relaxed text-[#4a3f2f]">
          Прошу цветов ароматных не дарить, а лучше доброе дело сотворить.
          Отсканируйте QR-код или нажмите кнопку, дабы внести свой вклад.
        </p>

        {/* QR — замените /public/assets/qr.png */}
        <div className="mx-auto mt-4 h-44 w-44 overflow-hidden rounded-xl border-2 border-dashed border-[#A41E22]/50 bg-transparent ">
        <AssetImage src={GIFTS.qr} alt="QR-код для пожертвования" rounded="rounded-lg" className="h-full w-full !object-contain" />
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5 font-accent text-sm italic text-[#6b5d48]">
          <Flower2 size={14} /> Цветы прошу заменить добром
        </div>

        <a
          href={GIFTS.charityUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#A41E22] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[#F4E9D0] transition hover:bg-[#7B1518] active:scale-95"
        >
          Сотворить доброе дело (СБП)
        </a>
      </div>
    </Section>
  );
}
