import Menu from "@/screens/Menu/Menu";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
]);
