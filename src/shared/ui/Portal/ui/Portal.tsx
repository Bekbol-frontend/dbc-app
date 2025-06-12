import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  content?: Element;
}

function Portal({ children, content = document.body }: IProps) {
  return createPortal(children, content);
}

export default Portal;
