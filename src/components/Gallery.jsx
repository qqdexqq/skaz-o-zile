import { MapPin, Navigation } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { VENUE } from "../data/content";

/** Место проведения: адрес и кнопка построения маршрута (без галереи) */
export default function Gallery() {
  return (
    <Section>
      <SectionTitle>Где собор стоять будет?</SectionTitle>

      <div className="mx-auto max-w-sm rounded-2xl border border-[#C8962E]/40 bg-[#F4E9D0]/90 p-6 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#A41E22] text-[#F4E9D0]">
          <MapPin size={24} />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#7B1518]">
          {VENUE.name}
        </h3>
        <p className="mt-1 font-body text-[15px] text-[#4a3f2f]">
          {VENUE.address}
        </p>
        <p className="mt-4 font-accent text-base italic text-[#6b5d48]">
          {VENUE.note}
        </p>

        <a
          href={VENUE.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#A41E22] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[#F4E9D0] transition hover:bg-[#7B1518] active:scale-95"
        >
          <Navigation size={16} />
          Построить маршрут
        </a>
      </div>
    </Section>
  );
}