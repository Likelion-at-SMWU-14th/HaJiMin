import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TitleContext from "./contexts/TitleContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    // ThemeContextProvider가 이미 value를 담아 반환
    <ThemeContextProvider>
      <TitleContext.Provider value={"jimin의 영화관⭐"}>
        <Header />
        <Outlet />
      </TitleContext.Provider>
    </ThemeContextProvider>
  );
}

export default App;
