import _ from "lodash";

export const preloadImages = async (images: string[]) => {
  const promises = _.map(
    images,
    (image) =>
      new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => setTimeout(() => resolve(true), 5000);
        // img.onload = resolve;
        img.onerror = reject;
        img.src = image;
      })
  );

  return await Promise.all(promises);
};
