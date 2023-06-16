import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import ThemeSelector from "./ThemeSelector";
import { javascript } from "@codemirror/lang-javascript";
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
  return (
    <div className="max-w-lg mx-auto rounded-md overflow-hidden">
      <CodeMirror
        value={codeValue}
        height="200px"
        theme={androidstudio}
        extensions={[javascript({ jsx: true })]}
        data-gramm="false"
      />
      <ThemeSelector />
    </div>
  );
};

export default CodeEditor;
