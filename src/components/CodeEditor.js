import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

import CodeMirror from "@uiw/react-codemirror";
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

import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import { toast } from "react-toastify";

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

const CodeEditor = () => {
  const dispatch = useDispatch();
  const { name, extractedCode } = useSelector((state) => state.imageData);
  // const initalCode = extractedCode ? formatCode(extractedCode) : "";
  console.log(extractedCode);
  // console.log(formatCode(extractedCode));
  const [codeValue, setCodeValue] = useState(formatCode(extractedCode));
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
      <div className="px-2 py-4 lg:px-12 lg:py-10 rounded">
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
            {/* <button
              onClick={() => {
                try {
                  setCodeValue(formatCode(codeValue));
                  toast.info("Code formatted successfully");
                } catch (e) {
                  toast.error("Unable to format code");
                }
              }}
              className="flex items-center gap-x-2 text-sm hover:text-text"
            >
              <Icon icon="uil:align-left" className="w-5 h-5" />
              <span className="hidden lg:block">Format</span>
            </button> */}
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(codeValue)
                  .then(() => toast.info("Code snippet copied to clipboard"))
                  .catch((err) => toast.error("An error occured in copying"));
              }}
              className="flex items-center gap-x-2 text-sm hover:text-text"
            >
              <Icon icon="iconamoon:copy-light" className="w-5 h-5" />
              <span className="hidden lg:block">Copy</span>
            </button>
            <button
              onClick={() => setIsSettingsOpen((prevSetting) => !prevSetting)}
              className="flex items-center gap-x-2 hover:text-text"
            >
              <Icon
                icon={isSettingsOpen ? "carbon:close" : "carbon:settings"}
                className="w-5 h-5"
              />
              <span className="hidden lg:block">
                {isSettingsOpen ? "Close" : "Settings"}
              </span>
            </button>
          </div>
        </div>

        <div className="relative text-left rounded-b-md overflow-hidden shadow-2xl">
          {isSettingsOpen && (
            <div className="absolute inset-0 bg-white text-text z-10 px-5 py-3 space-y-4">
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
            onChange={(value) => setCodeValue(value)}
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
