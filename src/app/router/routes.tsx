import { ChooseCharacter } from "@/screens/ChooseCharacter/ChooseCharacter";
import { ChooseDevourer } from "@/screens/ChooseDevourer/ChooseDevourer";
import { Game } from "@/screens/Game/Game";
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
        <Route path="/devourer" element={<ChooseDevourer />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AnimatePresence>
  );
};
