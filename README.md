# Сказ о Зиле Прекрасной

Мобильное одностраничное приглашение в русском фольклорном стиле.
Стек: **React + Vite + Tailwind CSS + Lucide React**.

## Запуск
```bash
npm install
npm run dev
```

## Где что менять
- **Тексты, дата, ссылки** → `src/data/content.js`
- **Дата для таймера** → поле `EVENT.date`
- **Фото и QR** → `public/assets/` (см. README внутри)
- **Цвета и шрифты** → `tailwind.config.js`

## Структура
```
src/
  data/content.js        — весь контент в одном файле
  components/
    Ornaments.jsx        — SVG-орнаменты (городецкая роспись)
    Section.jsx          — обёртки Section / SectionTitle
    Countdown.jsx        — таймер обратного отсчёта
    Hero.jsx             — шапка с портретом и таймером
    Program.jsx          — программа дня (таймлайн)
    Venue.jsx            — место встречи
    DressCode.jsx        — дресс-код + палитра
    Gifts.jsx            — подарки и благотворительность (QR/СБП)
    Rsvp.jsx             — форма ответа
  App.jsx                — сборка секций
```

## Подключение формы RSVP
Обработчик отправки — в `src/components/Rsvp.jsx`, функция `handleSubmit`.
Подключите Google Forms, Telegram-бота или свой API.
