// Весь редактируемый контент собран здесь — меняйте тексты, даты, ссылки и
// списки изображений в одном месте. Все картинки берутся из /public/assets.

export const EVENT = {
  // Дата/время торжества (для таймера). Формат: ГГГГ-ММ-ДДTчч:мм:сс
  date: "2026-07-11T13:00:00",
  dateLabel: "11 июля 2026 года",
  title: "Сказ о Зиле",
  titleSecond: "Прекрасной",
  rsvpDeadline: "7 июля",
  // Портрет героини: положите файл в /public/assets/portrait.png
  portrait: "/assets/portrait.png",
};

export const PROGRAM = [
  {
    time: "13:00 — 13:30",
    title: "Сбор гостей дорогих",
    text: "Встречаю добрых молодцев да красных девиц с почестями",
  },
  {
    time: "13:30 — 14:30",
    title: "Welcome-чарочка",
    text: "Разливаю напитки хмельные да заморские, вместе заздравные речи заводим",
  },
  {
    time: "14:30 — 22:00",
    title: "Потехи да угощения",
    text: "Пир горой, танцы залихватские, да веселье до упаду",
  },
];

export const VENUE = {
  name: "Яхт-клуб «Берёзки»",
  address: "ул. Санаторная, д. 6А, с. Поведники",
  note: "Встречаемся в живописном тереме на свежем воздухе у воды.",
  mapUrl: "https://yandex.ru/maps?whatshere%5Bzoom%5D=18&whatshere%5Bpoint%5D=37.610663,55.981656&si=15zz79c07gfppjk8fzeukvz0y4",
  // Галерея локации: 4–6 фото. Замените файлы в /public/assets/venue/
  gallery: [
    { src: "/assets/venue/1.jpg", alt: "Яхт-клуб «Берёзки» — терем" },
    { src: "/assets/venue/2.jpg", alt: "Вид на воду" },
    { src: "/assets/venue/3.jpg", alt: "Зал для торжества" },
    { src: "/assets/venue/4.jpg", alt: "Терраса" },
    { src: "/assets/venue/5.jpg", alt: "Причал" },
  ],
};

export const DRESS_CODE = {
  title: "Яркий а-ля рус",
  text:
    "Прошу поддержать атмосферу сказки и облачиться в наряды яркие, " +
    "с элементами русского стиля: красный цвет, вышивка, узоры дивные, " +
    "платки расписные, ленты в косах да кафтаны праздничные. " +
    "Будем во всей красе фотографироваться!",
  // Палитра: красный, белый, оранжевый, зелёный (без подписей)
  palette: ["#A41E22", "#F7F2E6", "#D2762B", "#2F7A3E"],
  // Сетка фото-референсов нарядов. Замените файлы в /public/assets/looks/
  looks: [
    { src: "/assets/looks/1.png", alt: "Образ 1" },
    { src: "/assets/looks/2.png", alt: "Образ 2" },
    { src: "/assets/looks/3.png", alt: "Образ 3" },
    { src: "/assets/looks/4.png", alt: "Образ 4" },
  ],
};

export const GIFTS = {
  wishlistUrl: "https://followish.io/mywishlist/zwrovu1tgxqyla",
  charityUrl: "https://c2c.cbrpay.ru/BS1I004GF6O9C5SP839A7QMRIKA8S561",
  // QR-код для пожертвования: /public/assets/qr.png
  qr: "/assets/qr.png",
};
