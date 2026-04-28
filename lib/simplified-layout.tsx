"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { SimplifiedLayoutContextType } from "@/types";

const SimplifiedLayoutContext = createContext<SimplifiedLayoutContextType>({
  simplified: false,
  toggle: () => {},
});

export function SimplifiedLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [simplified, setSimplified] = useState(false);

  // Persist preference to localStorage
  useEffect(() => {
    const stored = localStorage.getItem("simplified-layout");
    if (stored === "true") {
      setSimplified(true);
    }
  }, []);

  const toggle = () => {
    setSimplified((prev) => {
      const next = !prev;
      localStorage.setItem("simplified-layout", String(next));
      return next;
    });
  };

  return (
    <SimplifiedLayoutContext.Provider value={{ simplified, toggle }}>
      <div data-simplified={simplified}>{children}</div>
    </SimplifiedLayoutContext.Provider>
  );
}

export function useSimplifiedLayout(): SimplifiedLayoutContextType {
  return useContext(SimplifiedLayoutContext);
}
