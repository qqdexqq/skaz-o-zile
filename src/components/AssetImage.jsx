import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Картинка из /public/assets с аккуратным плейсхолдером, если файла ещё нет.
 * Замена фото = просто положить файл по этому пути (или поменять src в content.js).
 */
export default function AssetImage({ src, alt, className = "", rounded = "rounded-xl" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1 bg-[#e7d6b0] text-[#7B1518]/70 ${rounded} ${className}`}
      >
        <ImageIcon size={26} />
        <span className="px-2 text-center text-[10px] leading-tight opacity-70">{src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${rounded} ${className}`}
    />
  );
}
