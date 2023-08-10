import { Typography, TypographyProps } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import _ from "lodash";
import { useEffect, useState } from "react";

// const Title = styled.h2`
//   font-size: 3rem;
//   font-weight: 600;
// `;

// const Character = styled(motion.span)`
//   display: inline-block;
//   margin-right: -0.05em;
// `;

interface AnimatedTextProps {
  speed?: number;
  text?: string;
  variant?: TypographyProps["variant"];
}

export const AnimatedText = ({
  speed = 0.01,
  text,
  variant = "body1",
}: AnimatedTextProps) => {
  const [currentText, setCurrentText] = useState(text);

  const ctrls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("hidden");
      setCurrentText(text);
    };
    animate();
  }, [ctrls, text]);

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("visible");
    };
    animate();
  }, [ctrls, currentText]);

  const characterAnimation = (delay: number) => ({
    hidden: {
      opacity: 0,
      transition: {
        delay: speed * delay,
      },
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: speed * delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
      y: `0em`,
    },
  });

  return (
    <Typography
      sx={{
        width: "100%",
      }}
      variant={variant}
    >
      {_.split(currentText, "").map((character, index) => {
        if (character === "↵") return <br />;
        return (
          <Typography
            animate={ctrls}
            component={motion.span}
            initial="hidden"
            key={index}
            variant={variant}
            variants={characterAnimation(index)}
          >
            {character}
          </Typography>
        );
      })}
    </Typography>
  );
};
