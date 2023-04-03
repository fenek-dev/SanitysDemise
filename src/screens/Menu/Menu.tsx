import "./Menu.scss";
import { Modal } from "@/shared/atoms/Modal/Modal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Settings } from "@/features/Settings/Settings";

console.log(
  "[Menu.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function Menu() {
  const [bg, setBg] = useState(1);
  const [open, setOpen] = useState(false);

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
        <Button variant="outlined" onClick={() => setOpen(true)}>
          New Game
        </Button>
        <Button variant="outlined" disabled>
          Continue
        </Button>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Settings
        </Button>
        <Button variant="outlined">Quit</Button>
      </div>
      <Modal
        open={open}
        sx={{
          position: "fixed",
          inset: "auto 2rem auto auto",
        }}
      >
        <Settings close={() => setOpen(false)} />
      </Modal>
    </div>
  );
}

export default Menu;
