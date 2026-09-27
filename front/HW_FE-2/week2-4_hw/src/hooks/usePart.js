import { useContext } from "react";
import PartContext from "../contexts/PartContext";

const usePart = () => {
  const context = useContext(PartContext);
  if (!context) {
    throw new Error("PartContextProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
};

export default usePart;
