import "./Menu.scss";
import { Modal } from "@/shared/atoms/Modal/Modal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Settings } from "@/features/Settings";
import { NewGame } from "@/features/NewGame";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

console.log(
  "[Menu.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function Menu() {
  const [bg, setBg] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = window.setInterval(() => {
      setBg((value) => (value + 1) % 1);
    }, 60000);

    return () => {
      window.clearInterval(timeout);
    };
  }, []);

  return (
    <motion.div
      className={`full bg${bg}`}
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="menu-block">
        <Link to="/character" className="menu-btn-link">
          <Button className="img-button start-btn" variant="outlined">
            <span>{t("New Game")}</span>
          </Button>
        </Link>
        <Button className="img-button continue-btn" variant="outlined" disabled>
          <span>{t("Continue")}</span>
        </Button>
        <Link to="/settings" className="menu-btn-link">
          <Button className="img-button settings-btn" variant="outlined">
            <span>{t("Settings")}</span>
          </Button>
        </Link>
        <Button className="img-button quit-btn" variant="outlined">
          <span>{t("Quit")}</span>
        </Button>
      </div>
      {/* <Modal
        open={open === "settings"}
        sx={{
          position: "fixed",
          inset: "auto 2rem auto auto",
        }}
      >
        <Settings close={() => setOpen(null)} />
      </Modal> */}
    </motion.div>
  );
}

export default Menu;
