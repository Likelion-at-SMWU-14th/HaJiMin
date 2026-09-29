import { createContext, useState, type ReactNode } from "react";
import type { Part, PartContextValue } from "../types/member";

const PartContext = createContext<PartContextValue | null>(null);

interface PartContextProviderProps {
  children: ReactNode;
}

export const PartContextProvider = ({ children }: PartContextProviderProps) => {
  const [part, setPart] = useState<Part | "">("");

  return (
    <PartContext.Provider value={{ part, setPart }}>
      {children}
    </PartContext.Provider>
  );
};

export default PartContext;
