import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { Typography, TypographyProps } from "@mui/material";
import _ from "lodash";

// const Title = styled.h2`
//   font-size: 3rem;
//   font-weight: 600;
// `;

// const Character = styled(motion.span)`
//   display: inline-block;
//   margin-right: -0.05em;
// `;

interface AnimatedTextProps {
  text?: string;
  variant?: TypographyProps["variant"];
  speed?: number;
}

export const AnimatedText = ({
  text,
  variant = "body1",
  speed = 0.01,
}: AnimatedTextProps) => {
  const [currentText, setCurrentText] = useState(text);

  const ctrls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("hidden");
      setCurrentText(text);
    };
    animate();
  }, [text]);

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("visible");
    };
    animate();
  }, [currentText]);

  const characterAnimation = (delay: number) => ({
    hidden: {
      opacity: 0,
      y: `0.25em`,
      transition: {
        delay: speed * delay,
      },
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: speed * delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  });

  return (
    <Typography variant={variant}>
      {_.split(currentText, "").map((character, index) => {
        if (character === "↵") return <br />;
        return (
          <Typography
            component={motion.span}
            variant={variant}
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={characterAnimation(index)}
          >
            {character}
          </Typography>
        );
      })}
    </Typography>
  );
};
