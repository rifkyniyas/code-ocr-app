import React, { createContext, useState } from "react";

export const CodeEditorContext = createContext();

const CodeEditorContextProvider = ({ children }) => {
  const [editorSettings, setEditorSettings] = useState({
    theme: "vscodeDark",
    language: "",
  });

  const updateTheme = (newTheme) => {
    setEditorSettings((prevSettings) => ({
      ...prevSettings,
      theme: newTheme,
    }));
  };

  const updateLanguage = (newLanguage) => {
    setEditorSettings((prevSettings) => ({
      ...prevSettings,
      language: newLanguage,
    }));
  };

  return (
    <CodeEditorContext.Provider
      value={{ editorSettings, updateTheme, updateLanguage }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
};

export default CodeEditorContextProvider;
