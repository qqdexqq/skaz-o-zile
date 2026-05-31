import { Section, SectionTitle } from "./Section";
import Countdown from "./Countdown";
import { EVENT } from "../data/content";

/** Секция с таймером обратного отсчёта (размещается перед формой RSVP) */
export default function CountdownSection() {
  return (
    <Section>
      <SectionTitle>До пира осталось</SectionTitle>
      <Countdown targetDate={EVENT.date} />
    </Section>
  );
}
