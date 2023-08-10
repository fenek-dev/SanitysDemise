import { useLoadingContext } from "@/app/contexts/loading/loading.context";
import { preloadImages } from "@/app/utils/images/preloadImages";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export const Loading = () => {
  const { images, loading, setLoading } = useLoadingContext();

  useEffect(() => {
    if (images) {
      console.time();
      preloadImages(images).then((vals) => {
        console.log(vals);

        console.timeEnd();
        setLoading(false);
      });
    }
  }, [images, setLoading]);
  return (
    <AnimatePresence>
      {loading && (
        <Box
          animate={{ opacity: 1 }}
          bgcolor="white"
          className="full"
          component={motion.div}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          zIndex="100"
        >
          Loading
        </Box>
      )}
    </AnimatePresence>
  );
};

export const usePreloadImages = (images: string[]) => {
  const { loading, setImages, setLoading } = useLoadingContext();

  useEffect(() => {
    setLoading(true);
    setImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading && <div />;
};
