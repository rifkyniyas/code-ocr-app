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
import { Icon } from "@iconify/react";

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

  const { name, extractedCode } = useSelector((state) => state.imageData);
  const initalCode = extractedCode ? formatCode(extractedCode) : "";
  const [codeValue, setCodeValue] = useState(initalCode);
  const codeTheme = useSelector((state) => state.codeEditor.theme);
  const codeLanguage = useSelector((state) => state.codeEditor.language);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
    <div className="max-w-4xl mx-auto px-12 pb-10 rounded bg-accent">
      <div className="flex items-center justify-between">
        <div>
          <p>{name ? name : "No Image Name"}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setIsSettingsOpen((prevSetting) => !prevSetting)}
          >
            <Icon icon={""} />
            Settings
          </button>
          <button onClick={() => setCodeValue(formatCode(codeValue))}>
            Format Code
          </button>
          <button
            onClick={() => {
              navigator.clipboard
                .writeText(codeValue)
                .then(() => console.log("Code snippet copied to clipboard"))
                .catch((e) => console.log("Unable to copy code" + e));
              console.log("COpied");
            }}
          >
            Copy Code
          </button>
        </div>
      </div>

      <div className="relative rounded-md overflow-hidden">
        {isSettingsOpen && (
          <div className="absolute inset-0 bg-slate-600 z-50">
            <ThemeSelector />
            <LanguageSelector />
          </div>
        )}

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
