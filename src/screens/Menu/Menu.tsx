import "./Menu.scss";
import { MenuButton } from "@/shared/atoms/MenuButton/MenuButton";
import { useEffect, useState } from "react";

console.log(
  "[Menu.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function Menu() {
  const [bg, setBg] = useState(1);

  useEffect(() => {
    const timeout = window.setInterval(() => {
      setBg((value) => (value + 1) % 2);
    }, 60000);

    return () => {
      window.clearInterval(timeout);
    };
  }, []);
  return (
    <div className={`Menu bg${bg}`}>
      <div className="menu-block">
        <MenuButton variant="outlined">New Game</MenuButton>
        <MenuButton variant="outlined" disabled>
          Continue
        </MenuButton>
        <MenuButton variant="outlined">Settings</MenuButton>
        <MenuButton variant="outlined">Quit</MenuButton>
      </div>
    </div>
  );
}

export default Menu;
