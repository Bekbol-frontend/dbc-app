import { IoIosStar } from "react-icons/io";
import type { ICustomer } from "../types";

export const customerItems: ICustomer[] = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Петров",
    companyName: "CEO «Альфа Трейд»",
    desc: "DBC внедрили CRM за 2 недели – ROI +40%. Особенно впечатлила скорость работы и профессионализм команды. Рекомендую!",
    Icon: IoIosStar,
    imgUrl:
      "https://media.npr.org/assets/img/2016/11/08/dmodel-1_vert-1922d45fb256f25a9ab945e3b0e7197b8a29e3b3.jpg?s=1100&c=50&f=jpeg",
  },
  {
    id: 2,
    firstName: "Анна",
    lastName: "Козлова",
    companyName: "Директор по логистике «МегаСклад»",
    desc: "Автоматизировали склад с помощью ERP-системы. Ошибки учёта сократились на 85%, время обработки заказов в 3 раза быстрее.",
    Icon: IoIosStar,
  },
  {
    id: 3,
    firstName: "Дмитрий",
    lastName: "Сидоров",
    companyName: "Владелец сети «Вкусные моменты»",
    desc: "Telegram-бот для нашего ресторана решил проблему с заказами. Клиенты довольны, персонал разгружен. Техподдержка работает отлично!",
    Icon: IoIosStar,
    imgUrl: "https://i.ytimg.com/vi/id1YeJS5T4g/hqdefault.jpg",
  },
  {
    id: 4,
    firstName: "Елена",
    lastName: "Морозова",
    companyName: "Финансовый директор «Стиль Плюс»",
    desc: "POS-система от DBC + интеграция с 1С. Полная прозрачность финансов, отчёты в реальном времени. Окупилась за 3 месяца.",
    Icon: IoIosStar,
    imgUrl:
      "https://preview.redd.it/what-season-is-nyakim-gatwech-would-love-to-see-more-poc-on-v0-oi9f4zw221hb1.jpg?width=1080&crop=smart&auto=webp&s=909edd9cbd24da19939cfe9bf0ee784f41515af2",
  },
];
