import { ChooseCharacter } from "@/screens/ChooseCharacter/ChooseCharacter";
import Menu from "@/screens/Menu/Menu";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/character",
    element: <ChooseCharacter />,
  },
]);
