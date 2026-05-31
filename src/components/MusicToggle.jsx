import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

/** Плавающая кнопка музыки с попыткой автозапуска */
export default function MusicToggle({ src = "/assets/music.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function start() {
    const a = audioRef.current;
    if (!a) return Promise.reject();
    a.volume = 0.5;
    return a.play().then(() => setPlaying(true));
  }

    useEffect(() => {
    // задержка перед попыткой автозапуска (мс): 3000 = 3 сек, 5000 = 5 сек
    const delay = 4000;

    const timer = setTimeout(() => {
      // 1) пробуем запустить через несколько секунд
      start().catch(() => {
        // 2) если браузер заблокировал — ждём первого действия пользователя
        const kick = () => {
          start().finally(() => {
            window.removeEventListener("pointerdown", kick);
            window.removeEventListener("keydown", kick);
          });
        };
        window.addEventListener("pointerdown", kick);
        window.addEventListener("keydown", kick);
      });
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      start().catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Выключить музыку" : "Включить музыку"}
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8962E]/50 bg-[#7B1518] text-[#F4E9D0] shadow-lg transition hover:bg-[#A41E22] active:scale-95 ${
          playing ? "animate-pulse" : ""
        }`}
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
}