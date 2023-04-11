import { ChooseCharacter } from "@/screens/ChooseCharacter/ChooseCharacter";
import { RunSettings } from "@/screens/RunSettings/RunSettings";
import { Game } from "@/screens/Game/Game";
import Menu from "@/screens/Menu/Menu";
import { Settings } from "@/screens/Settings/Settings";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, createHashRouter, useLocation } from "react-router-dom";
import { Loading } from "@/screens/Loading/Loading";

export const RoutesList = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Menu />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/character" element={<ChooseCharacter />} />
        <Route path="/run_settings" element={<RunSettings />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Loading />
    </AnimatePresence>
  );
};
