import { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLDivElement | null>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useOutside = ({ ref, setShow }: IProps) => {
  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("click", callback);

    return () => {
      document.removeEventListener("click", callback);
    };
  }, [ref]);
};
