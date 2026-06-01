import Hero from "./components/Hero";
import Program from "./components/Program";
import Gallery from "./components/Gallery";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import CountdownSection from "./components/CountdownSection";
import RSVPForm from "./components/RSVPForm";
import { CrossStitchBand } from "./components/Ornaments";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  return (
    <div className="parchment min-h-screen font-body antialiased">
      {/* Телефонный контейнер */}
      <div className="parchment mx-auto min-h-screen max-w-md shadow-2xl">
        <Hero />
        <Program />
        <Gallery />
        <DressCode />
        <Gifts />
        <CountdownSection />
        <RSVPForm />

        <footer className="parchment-dark pb-8 text-center">
          <CrossStitchBand className="h-3 w-full opacity-90" />
          <p className="mt-6 font-display text-xl text-[#E0B45C]">
            Сказ о Зиле Прекрасной
          </p>
          <p className="mt-1 font-accent text-sm italic text-[#F4E9D0]/60">
            Жду вас на моем пиру
          </p>
        </footer>
      </div>

      {/* Плавающая кнопка музыки */}
      <MusicToggle />
    </div>
  );
}