import { RootState } from "@/app/store";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const StoryDescription = React.forwardRef((_props, ref) => {
  const { mainStory } = useSelector((state: RootState) => state.general);
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Box
        sx={{
          aspectRatio: "1.7",
        }}
        bgcolor="var(--main-color)"
        border="2px solid var(--white-main-color)"
        borderRadius="0.3rem"
        m="1rem"
      >
        <Box
          sx={{
            background: `url("${mainStory?.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
          height="100%"
          ref={ref}
          width="100%"
        />
      </Box>
      <Box
        bgcolor="rgba(var(--bg-color-rgb), 0.5)"
        border="2px solid var(--white-main-color)"
        borderRadius="0.3rem"
        m="1rem"
        p="1rem"
        textAlign="center"
      >
        <AnimatedText
          speed={0.005}
          text={t(mainStory?.description || "") || ""}
          variant="h5"
        />
      </Box>
    </Box>
  );
});
