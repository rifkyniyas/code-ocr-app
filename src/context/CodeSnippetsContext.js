import React, { createContext, useState } from "react";

export const CodeSnippetsContext = createContext();

const CodeSnippetsContextProvider = ({ children }) => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  const addSnippets = (newSnippets) =>
    setCodeSnippets((prevSnippets) => [...prevSnippets, newSnippets]);

  const removeSnippets = (removedSnippet) =>
    setCodeSnippets((prevSnippets) =>
      prevSnippets.filter((snippet) => snippet.id != removeSnippets)
    );
  return (
    <CodeSnippetsContext.Provider value={{ codeSnippets, addSnippets }}>
      {children}
    </CodeSnippetsContext.Provider>
  );
};

export default CodeSnippetsContextProvider;
