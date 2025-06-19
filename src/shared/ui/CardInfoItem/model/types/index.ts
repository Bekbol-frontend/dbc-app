import type { IconType } from "react-icons";

export interface ICardInfoItem {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  bottomDesc?: string;
}
