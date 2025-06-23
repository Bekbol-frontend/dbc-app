import { useCallback, useRef } from "react";

export const useThrottle = (callback: () => void, delay: number) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastArgsRef = useRef<any>([]);

  return useCallback(
    (...args: any[]) => {
      lastArgsRef.current = args;

      if (!throttleRef.current) {
        callback();
        throttleRef.current = true;

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;

          // Agar oxirgi chaqiriq bor bo'lsa, uni ham bajaring
          const finalTimeout = setTimeout(() => {
            if (lastArgsRef.current) {
              callback();
              lastArgsRef.current = undefined;
            }
          }, 50); // Kichik kechikish

          return finalTimeout;
        }, delay);
      }
    },
    [callback, delay]
  );
};
