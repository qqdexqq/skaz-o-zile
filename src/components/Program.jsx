import { Section, SectionTitle } from "./Section";
import { PROGRAM } from "../data/content";

/** Программа дня — вертикальный таймлайн; время крупно и заметно */
export default function Program() {
  return (
    <Section>
      <SectionTitle>
  <span className="text-4xl sm:text-5xl">Программа дня</span>
</SectionTitle>

      <p className="mb-8 text-center font-body text-[20px] leading-relaxed text-[#4a3f2f]">
        Дорогие да любимые гости! Ждём вас на нашем пиру. Ознакомьтесь с
        расписанием дня, дабы ни одной забавы приметной не пропустить.
      </p>

      <ol className="relative ml-2 border-l-2 border-dashed border-[#A41E22]/40">
        {PROGRAM.map((item) => (
          <li key={item.time} className="relative mb-9 pl-7 last:mb-0">
            <span className="absolute -left-[10px] top-2 h-5 w-5 rounded-full border-2 border-[#F4E9D0] bg-[#A41E22] shadow" />
            {/* Крупное время */}
            <p className="font-display text-2xl font-bold leading-tight text-[#A41E22] sm:text-3xl">
              {item.time}
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold text-[#1c1c1c]">
              {item.title}
            </h3>
            <p className="mt-1 font-body text-xl leading-relaxed text-[#6b5d48]">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
