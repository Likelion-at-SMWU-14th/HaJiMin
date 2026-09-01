import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
