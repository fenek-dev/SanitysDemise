export interface LoadingContextType {
  loading: boolean;
  images?: string[];
  setLoading: (value: boolean) => void;
  setImages: (value: string[]) => void;
}

import { createContext, useContext, useState } from "react";

//create a context, with createContext api
export const LoadingContext = createContext<LoadingContextType>({
  images: undefined,
  loading: false,
  setLoading: () => null,
  setImages: () => null,
});

const LoadingContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>();

  return (
    <LoadingContext.Provider value={{ loading, setLoading, images, setImages }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);

export default LoadingContextProvider;
