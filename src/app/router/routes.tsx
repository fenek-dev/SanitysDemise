import { ChooseCharacter } from "@/screens/ChooseCharacter/ChooseCharacter";
import Menu from "@/screens/Menu/Menu";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, createHashRouter, useLocation } from "react-router-dom";

export const RoutesList = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Menu />} />
        <Route path="/character" element={<ChooseCharacter />} />
      </Routes>
    </AnimatePresence>
  );
};
