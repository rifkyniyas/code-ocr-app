import { useState } from "react";
import { useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
//Themes
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { githubDark } from "@uiw/codemirror-theme-github";
import { githubLight } from "@uiw/codemirror-theme-github";
import { materialDark } from "@uiw/codemirror-theme-material";
import { materialLight } from "@uiw/codemirror-theme-material";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";

const CodeEditor = () => {
  const formatCode = (code) => {
    try {
      return prettier.format(code, {
        parser: "babel",
        plugins: [parserBabel],
      });
    } catch (error) {
      console.error("Error formatting code:", error);
      return code;
    }
  };

  const { extractedCode } = useSelector((state) => state.imageData);
  const initalCode = extractedCode ? formatCode(extractedCode) : "";
  console.log(initalCode);
  const [codeValue, setCodeValue] = useState(initalCode);
  const codeTheme = useSelector((state) => state.codeEditor.theme);
  const codeLanguage = useSelector((state) => state.codeEditor.language);

  const themeMap = {
    androidstudio,
    dracula,
    eclipse,
    githubDark,
    githubLight,
    materialDark,
    materialLight,
    sublime,
    vscodeDark,
    xcodeDark,
    xcodeLight,
  };

  const handleChange = (value) => {
    setCodeValue(value);
  };

  return (
    <div>
      <ThemeSelector />
      <LanguageSelector />
      <button onClick={() => setCodeValue(formatCode(codeValue))}>
        Format Code
      </button>
      <div className="max-w-4xl mx-auto rounded-md overflow-hidden">
        <CodeMirror
          value={codeValue}
          height="200px"
          theme={themeMap[codeTheme] || vscodeDark}
          extensions={[loadLanguage(codeLanguage)]}
          data-gramm="false"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
