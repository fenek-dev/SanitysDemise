import { ALL_STORIES } from "@/entities/stories";
import { CharacterMainStory } from "@/entities/stories/types";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";
import { useTranslation } from "react-i18next";

interface StoriesProps {
  name: string;
  onChoose: (story: CharacterMainStory) => void;
  selectedStory: CharacterMainStory;
}

export const Stories = ({ name, onChoose, selectedStory }: StoriesProps) => {
  const { t } = useTranslation();
  return (
    <Box
      borderRadius="0.3rem"
      display="inline-flex"
      flexDirection="column"
      gap="1rem"
      pt="1rem"
    >
      <Typography
        color="var(--white-main-color)"
        textAlign="center"
        variant="h4"
      >
        {t("Choose a backstory")}
      </Typography>
      {_.map(ALL_STORIES[name], (story) => (
        <Button
          sx={{
            ":before": {
              background: `url("${story.image}") center center no-repeat`,
              backgroundSize: "cover",
            },
            minWidth: "20rem",
          }}
          className="img-button"
          data-checked={selectedStory.name === story.name}
          key={story.name}
          onClick={() => onChoose(story)}
        >
          <Typography
            className="img-button-text"
            fontWeight="medium"
            variant="h6"
          >
            {t(story.name)} (0/{story.ends})
          </Typography>
        </Button>
      ))}
    </Box>
  );
};
