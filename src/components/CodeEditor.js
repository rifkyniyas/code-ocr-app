import { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import { javascript } from "@codemirror/lang-javascript";
import { langs } from "@uiw/codemirror-extensions-langs";
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
  const [extensions, setExtensions] = useState(null);
  function handleLangChange(langs) {
    try {
      import(`code-example/txt/sample.${lang.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setCode(data.default);
          if (langs[lang]) {
            setExtensions([color, langs[lang]()]);
          }
          setMode(lang);
        })
        .catch((err) => {
          if (langs[lang]) {
            setExtensions([color, langs[lang]()]);
          } else {
            setExtensions([color]);
          }
          setMode(lang);
          setCode("");
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   handleLangChange("javascript");
  // }, []);

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
      <LanguageSelector />
    </div>
  );
};

export default CodeEditor;
