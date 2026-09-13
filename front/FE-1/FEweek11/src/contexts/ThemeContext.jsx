import { createContext, useState } from "react";
// styled-components 기본 내장 테마 provider
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

// Provider를 컴포넌트로 export -> App에서 따로 설정할 필요 없이 사용만 할 수 있음 !
export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    console.log("테마가 변경되었습니다.");
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const lightTheme = {
  bg: "#f7f3ec",
  surface: "#ffffff",
  text: "#1f1b17",
  accent: "#b8860b",
  border: "#e4ddd0",
  muted: "#6b6259",
};

export const darkTheme = {
  bg: "#1f1b17",
  surface: "#2a241d",
  text: "#f7f3ec",
  accent: "#c89a3c",
  border: "#3a332b",
  muted: "#a89f92",
};
