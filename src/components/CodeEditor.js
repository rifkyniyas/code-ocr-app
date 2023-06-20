import { useContext } from "react";
import { CodeEditorContext } from "@/context/CodeEditorContext";
import CodeMirror from "@uiw/react-codemirror";
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
const CodeEditor = ({ codeValue }) => {
  const { editorSettings } = useContext(CodeEditorContext);
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

  return (
    <div>
      <div className="max-w-lg mx-auto rounded-md overflow-hidden">
        <CodeMirror
          value={codeValue}
          height="200px"
          theme={themeMap[editorSettings.theme] || vscodeDark}
          extensions={[loadLanguage(editorSettings.language)]}
          data-gramm="false"
        />
      </div>

      <ThemeSelector />
      <LanguageSelector />
    </div>
  );
};

export default CodeEditor;
