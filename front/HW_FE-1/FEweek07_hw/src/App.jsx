import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { useTodos } from "./hooks/useTodos";

function App() {
  const todoData = useTodos();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage {...todoData} />} />
        <Route
          path="/detail/:todoId"
          element={<TodoDetailPage {...todoData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
