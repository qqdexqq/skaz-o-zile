import { Divider } from "./Ornaments";

/** Вертикальный контейнер-секция с единообразными отступами */
export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`px-6 py-10 ${className}`}>
      {children}
    </section>
  );
}

/** Заголовок секции в «сказочном» стиле с орнаментом-разделителем */
export function SectionTitle({ children, withDivider = true }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="font-display text-3xl font-bold text-[#7B1518] sm:text-4xl">
        {children}
      </h2>
      {withDivider && <Divider className="mt-4" />}
    </div>
  );
}
