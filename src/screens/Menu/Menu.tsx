import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Menu.scss";

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
      animate={{ opacity: 1 }}
      className={`full bg${bg}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key="menu"
      transition={{ duration: 0.5 }}
    >
      <div className="menu-block">
        <Link className="menu-btn-link" to="/character">
          <Button className="img-button start-btn" variant="outlined">
            <span>{t("New Game")}</span>
          </Button>
        </Link>
        <Button className="img-button continue-btn" disabled variant="outlined">
          <span>{t("Continue")}</span>
        </Button>
        <Link className="menu-btn-link" to="/settings">
          <Button className="img-button settings-btn" variant="outlined">
            <span>{t("Settings")}</span>
          </Button>
        </Link>
        <Button
          className="img-button quit-btn"
          variant="outlined"
          // onClick={() => ipcRenderer.send("close")}
        >
          <span>{t("Quit")}</span>
        </Button>
      </div>
    </motion.div>
  );
}

export default Menu;
