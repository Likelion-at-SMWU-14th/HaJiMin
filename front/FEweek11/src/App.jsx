import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TitleContext from "./contexts/TitleContext";

function App() {
  return (
    <>
      <TitleContext.Provider value={"jimin의 영화관⭐"}>
        <Header />
        <Outlet />
      </TitleContext.Provider>
    </>
  );
}

export default App;
