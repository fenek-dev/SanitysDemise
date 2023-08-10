import { useFade } from "@/app/hooks/useFade";
import { RootState } from "@/app/store";
import { removeCurrentScene } from "@/app/store/general/general.slice";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const Scenes = () => {
  const { t } = useTranslation();
  const currentScene = useSelector(
    (state: RootState) => state.general.currentScene
  );
  const [stage, setStage] = useState<number>(0);
  const [scope, animation] = useFade(0.5);
  const dispatch = useDispatch();

  const onClick = async () => {
    animation(() => setStage((val) => val + 1));
  };

  useEffect(() => {
    if (_.size(currentScene?.stages) < stage + 1) {
      dispatch(removeCurrentScene());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <>
      <AnimatePresence>
        {_.size(currentScene?.stages) > 0 && (
          <motion.div
            animate={{ opacity: 1 }}
            className="full"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ background: "black" }}
            transition={{ duration: 0.5 }}
          >
            <Box
              bgcolor="black"
              className="full"
              display="flex"
              flexDirection="column"
              onClick={onClick}
              zIndex="1000"
            >
              <Box
                sx={{
                  background: `url("${currentScene?.stages[stage]?.image}") center center no-repeat`,
                  backgroundSize: "cover",
                }}
                height="calc(100vh - 12rem)"
                ref={scope}
                width="100%"
              />
              <Box
                color="var(--white-main-color)"
                height="12rem"
                padding="2rem"
                textAlign="center"
                width="100%"
              >
                <AnimatedText
                  text={t(currentScene?.stages[stage]?.subtitle || "") || ""}
                  variant="h5"
                />
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
