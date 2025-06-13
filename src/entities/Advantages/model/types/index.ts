import type { IconType } from "react-icons";
import { FaCogs, FaDollarSign, FaHeadset, FaUserTie } from "react-icons/fa";

interface IAdvantagesCard {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
}

export const advantageItems: IAdvantagesCard[] = [
  {
    id: 1,
    Icon: FaUserTie,
    title: "Глубокая экспертиза",
    description: "Более 10 лет автоматизации бизнес‑решений",
  },
  {
    id: 2,
    Icon: FaCogs,
    title: "Комплексный подход",
    description: "CRM, ERP, POS, IoT, видеонаблюдение, бот‑сервисы",
  },
  {
    id: 3,
    Icon: FaHeadset,
    title: "Надёжная поддержка",
    description: "Быстрый отклик и техподдержка 24/7",
  },
  {
    id: 4,
    Icon: FaDollarSign,
    title: "Доступные цены",
    description: "Прозрачное ценообразование без скрытых платежей",
  },
];
