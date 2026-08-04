import { createContext, useState } from "react";

const ThemeContext = createContext();

// Provider를 컴포넌트로 export -> App에서 따로 설정할 필요 없이 사용만 할 수 있음 !
export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    console.log("테마가 변경되었습니다.");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
