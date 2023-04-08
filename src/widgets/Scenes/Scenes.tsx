import { RootState } from "@/app/store";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { removeCurrentScene } from "@/app/store/general/general.slice";
import { useTranslation } from "react-i18next";

export const Scenes = () => {
  const { t } = useTranslation();
  const currentScene = useSelector(
    (state: RootState) => state.general.currentScene
  );
  const [stage, setStage] = useState<number>(0);
  const [scope, animate] = useAnimate();
  const dispatch = useDispatch();

  const animation = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
    setStage((val) => val + 1);
    await animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  };

  const onClick = async () => {
    if (_.size(currentScene?.stages) !== stage + 1) {
      await animation();
    } else {
      await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
      dispatch(removeCurrentScene());
    }
  };

  return (
    <>
      <AnimatePresence>
        {_.size(currentScene?.stages) > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="full"
            style={{ background: "black" }}
          >
            <Box
              className="full"
              zIndex="1000"
              display="flex"
              flexDirection="column"
              bgcolor="black"
              onClick={onClick}
            >
              <Box
                ref={scope}
                height="calc(100vh - 12rem)"
                width="100%"
                sx={{
                  background: `url("${currentScene?.stages[stage]?.image}") center center no-repeat`,
                  backgroundSize: "cover",
                }}
              />
              <Box
                height="12rem"
                width="100%"
                padding="2rem"
                color="var(--white-main-color)"
                textAlign="center"
              >
                <AnimatedText
                  text={t(currentScene?.stages[stage]?.subtitle || "") || ""}
                />
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
