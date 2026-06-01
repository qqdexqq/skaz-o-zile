import { useState } from "react";
import { Check, Send, PartyPopper, HandHeart } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { EVENT } from "../data/content";

/** Форма ответа: имя, переключатель присутствия, отправка */
export default function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(null); // true | false | null
  const [sent, setSent] = useState(false);

  const canSend = name.trim().length > 1 && attending !== null;

async function handleSubmit() {
    if (!canSend) return;

    const TOKEN = "8957342351:AAGbROHO2dIZlcxhTZKuacBrzj-Qm4J-iN0"; // токен от BotFather
    const CHAT_ID = "1187418650";                      // твой chat_id

    const text =
      `🎉 Новый ответ на приглашение\n` +
      `Имя: ${name}\n` +
      `Статус: ${attending ? "✅ Придёт" : "❌ Не сможет"}`;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
    } catch (e) {
      console.error("Telegram error:", e);
    }

    setSent(true); // экран благодарности покажем в любом случае
  }

  if (sent) {
    return (
      <Section className="parchment-dark text-center">
        <PartyPopper className="mx-auto mb-3 text-[#E0B45C]" size={40} />
        <h2 className="font-display text-3xl font-bold text-[#F4E9D0]">
          Благодарствую, {name.trim().split(" ")[0]}!
        </h2>
        <p className="mt-2 font-accent text-lg italic text-[#E0B45C]">
          {attending
            ? "Жду вашу милость на пиру!"
            : "Кланяюсь низко и шлю привет издалека."}
        </p>
      </Section>
    );
  }

  return (
    <Section className="parchment-dark">
      <SectionTitle withDivider>
        <span className="text-[#F4E9D0]">Молвите слово</span>
      </SectionTitle>

      <p className="mb-7 text-center font-body text-[18px] leading-relaxed text-[#F4E9D0]/85">
        Дабы столы ломились от угощений, а чаши были полны, прошу дать ответ до{" "}
        <span className="font-semibold text-[#E0B45C]">{EVENT.rsvpDeadline}</span>,
        явится ли ваша милость на мое празднество.
      </p>

      <div className="mx-auto max-w-sm space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя и Фамилия"
          className="w-full rounded-full border-2 border-[#C8962E]/50 bg-[#F4E9D0] px-5 py-3 font-body text-base text-[#1c1c1c] outline-none placeholder:text-[#9a8b6f] focus:border-[#E0B45C]"
        />

        <div className="grid grid-cols-1 gap-2.5">
          <ToggleOption
            active={attending === true}
            onClick={() => setAttending(true)}
            icon={<PartyPopper size={18} />}
            label="Явлюсь обязательно!"
          />
          <ToggleOption
            active={attending === false}
            onClick={() => setAttending(false)}
            icon={<HandHeart size={18} />}
            label="Не смогу прибыть, шлю поклон издалека"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSend}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E0B45C] px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-[#7B1518] transition enabled:hover:bg-[#C8962E] enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={16} />
          Отправить ответ
        </button>
      </div>
    </Section>
  );
}

function ToggleOption({ active, onClick, icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-body text-lg transition active:scale-[0.98] ${
        active
          ? "border-[#E0B45C] bg-[#F4E9D0] text-[#7B1518]"
          : "border-[#F4E9D0]/30 bg-transparent text-[#F4E9D0]/80 hover:border-[#F4E9D0]/60"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          active ? "border-[#A41E22] bg-[#A41E22] text-[#F4E9D0]" : "border-current"
        }`}
      >
        {active ? <Check size={14} /> : icon}
      </span>
      {label}
    </button>
  );
}
