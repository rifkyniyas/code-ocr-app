import React, { createContext, useState } from "react";

export const ImageDataContext = createContext();

const ImageDataContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState({
    name: "",
    originalData: "",
    isCropped: false,
    croppedData: "",
  });

  const updateImageData = (newData) =>
    setImageData((prevData) => ({ ...prevData, newData }));

  return (
    <ImageDataContext.Provider value={{ imageData, updateImageData }}>
      {children}
    </ImageDataContext.Provider>
  );
};

export default ImageDataContextProvider;
