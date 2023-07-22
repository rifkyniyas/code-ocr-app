import { useDispatch } from "react-redux";
import { updateTheme } from "@/redux/codeEditorSlice";
import Select from "react-select";

const ThemeSelector = () => {
  const dispatch = useDispatch();
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
    <div className="flex flex-col">
      <label htmlFor="themeSelect" className="text-left font-medium mb-2">
        Select Theme
      </label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={themeOptions[8]} //Select VS code
        isSearchable={true}
        name="editorTheme"
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        onChange={(newTheme) => {
          dispatch(updateTheme(newTheme.value));
        }}
        options={themeOptions}
      />
    </div>
  );
};

export default ThemeSelector;
