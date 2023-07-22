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
    <div className="max-w-5xl mx-auto my-3">
      <div className=" px-2 py-4 lg:px-12 lg:py-10 rounded">
        <div
          className="flex items-center justify-between py-2 px-6 rounded-t-md 
      bg-primary text-white"
        >
          <div className="flex items-center gap-x-4">
            <Icon icon="ic:round-image" className="w-5 h-5" />
            <p className="text-lg font-medium">
              {name ? name : "No Image Name"}
            </p>
          </div>

          <div className="flex items-center gap-x-6">
            <button
              onClick={() => setIsSettingsOpen((prevSetting) => !prevSetting)}
              className="flex items-center gap-x-2 hover:text-text"
            >
              <Icon icon="carbon:settings" className="w-5 h-5" />
              <span>Settings</span>
            </button>
            <button
              onClick={() => setCodeValue(formatCode(codeValue))}
              className="flex items-center gap-x-2 text-sm hover:text-text"
            >
              <Icon icon="uil:align-left" className="w-5 h-5" />
              <span>Format</span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(codeValue)
                  .then(() => console.log("Code snippet copied to clipboard"))
                  .catch((e) => console.log("Unable to copy code" + e));
              }}
              className="flex items-center gap-x-2 text-sm hover:text-text"
            >
              <Icon icon="iconamoon:copy-light" className="w-5 h-5" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        <div className="relative rounded-b-md overflow-hidden shadow-2xl">
          {isSettingsOpen && (
            <div className="absolute inset-0 bg-white text-text z-50 px-5 py-3 space-y-4">
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
      <div className="flex flex-col justify-center items-center">
        <p className="mb-2">
          Did I save your time? Help me improve the experience by providing a
          short feedback!
        </p>
        <a
          href="#feedback"
          className="py-3 px-5 text-sm font-medium text-center text-white bg-cta
        hover:bg-primary rounded disabled:bg-gray disabled:hover:bg-gray"
        >
          Provide Feedback
        </a>
      </div>
    </div>
  );
};

export default CodeEditor;
