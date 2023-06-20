import { useContext } from "react";
import { CodeEditorContext } from "@/context/CodeEditorContext";
import Select from "react-select";

const ThemeSelector = () => {
  const { updateTheme } = useContext(CodeEditorContext);
  const themeOptions = [
    { value: "androidstudio", label: "Android Studio" },
    { value: "dracula", label: "Dracula" },
    { value: "eclipse", label: "Eclipse" },
    { value: "githubDark", label: "Github Dark" },
    { value: "githubLight", label: "Github Light" },
    { value: "materialDark", label: "Material Dark" },
    { value: "materialLight", label: "Material Light" },
    { value: "sublime", label: "Sublime Text" },
    { value: "vscodeDark", label: "Visual Studio Code" },
    { value: "xcodeDark", label: "X Code Dark" },
    { value: "xcodeLight", label: "X Code Light" },
  ];
  return (
    <div>
      <label htmlFor="themeSelect">Select Theme</label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={themeOptions[8]} //Select VS code
        isSearchable={true}
        isClearable={true}
        name="editorTheme"
        onChange={(newTheme) => {
          // console.log(newTheme);
          updateTheme(newTheme.value);
        }}
        options={themeOptions}
      />
    </div>
  );
};

export default ThemeSelector;
