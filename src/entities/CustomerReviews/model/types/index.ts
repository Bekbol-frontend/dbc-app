import type { IconType } from "react-icons";

export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  desc: string;
  Icon: IconType;
  imgUrl?: string;
}
