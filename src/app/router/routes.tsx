import { ChooseCharacter } from "@/screens/ChooseCharacter/ChooseCharacter";
import { Game } from "@/screens/Game/Game";
import { Loading } from "@/screens/Loading/Loading";
import Menu from "@/screens/Menu/Menu";
import { RunSettings } from "@/screens/RunSettings/RunSettings";
import { Settings } from "@/screens/Settings/Settings";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export const RoutesList = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Menu />} path="/" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<ChooseCharacter />} path="/character" />
        <Route element={<RunSettings />} path="/run_settings" />
        <Route element={<Game />} path="/game" />
      </Routes>
      <Loading />
    </AnimatePresence>
  );
};
