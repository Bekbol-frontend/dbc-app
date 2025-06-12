import { routePaths } from "@/shared/config/routeConfig";
import type { IMenuItem } from "../types";

export const menuItems: IMenuItem[] = [
  {
    path: routePaths.ABOUT,
    name: "О нас",
  },
  {
    path: routePaths.SERVICES,
    name: "Услуги",
  },
  {
    path: routePaths.CASES,
    name: "Кейсы",
  },
  {
    path: routePaths.CONTACTS,
    name: "Контакты",
  },
];
