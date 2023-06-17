import { useContext } from "react";
import { CodeEditorContext } from "@/context/CodeEditorContext";
import CodeMirror from "@uiw/react-codemirror";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
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
  const { editorSettings, updateTheme, updateLanguage } =
    useContext(CodeEditorContext);
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
      {/* <h1>Theme: {editorSettings.theme}</h1>
      <button onClick={() => updateTheme("androidstudio")}>Update Theme</button>

      <h1>Language: {editorSettings.language}</h1>
      <button onClick={() => updateLanguage("php")}>Update Language</button> */}
    </div>
  );
};

export default CodeEditor;
