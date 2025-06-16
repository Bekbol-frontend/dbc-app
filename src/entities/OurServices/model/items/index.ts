import type { IOurServicesCard } from "../types";
import {
  FaUsers,
  FaCogs,
  FaCashRegister,
  FaRobot,
  FaChartLine,
  FaVideo,
} from "react-icons/fa";

export const ourServicesItems: IOurServicesCard[] = [
  {
    id: 1,
    Icon: FaUsers,
    title: "CRM-системы",
    description:
      "Управление клиентскими отношениями, автоматизация продаж и повышение лояльности клиентов",
  },
  {
    id: 2,
    Icon: FaCogs,
    title: "ERP автоматизация",
    description:
      "Комплексное планирование ресурсов предприятия и оптимизация бизнес-процессов",
  },
  {
    id: 3,
    Icon: FaCashRegister,
    title: "POS-системы",
    description:
      "Современные решения для точек продаж с полной интеграцией учетных систем",
  },
  {
    id: 4,
    Icon: FaRobot,
    title: "Телеграм-боты",
    description:
      "Автоматизация клиентского сервиса и бизнес-процессов через мессенджеры",
  },
  {
    id: 5,
    Icon: FaChartLine,
    title: "Системы учёта",
    description:
      "Автоматизированный учет товаров, финансов и аналитическая отчетность",
  },
  {
    id: 6,
    Icon: FaVideo,
    title: "Видеонаблюдение и IoT",
    description:
      "Интеллектуальные системы безопасности и интернет вещей для полного контроля",
  },
];
