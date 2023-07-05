import { useDispatch } from "react-redux";
import { updateLanguage } from "@/redux/codeEditorSlice";
import { langs } from "@uiw/codemirror-extensions-langs";
import Select from "react-select";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const languageOptions = Object.keys(langs)
    .sort()
    .map((lang) => ({
      value: lang,
      //Capitalize the first letter
      label: lang.charAt(0).toUpperCase() + lang.slice(1),
    }));
  return (
    <div>
      <label htmlFor="langSelect">Select Language</label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={languageOptions[42]} //Select JavaScript
        isSearchable={true}
        name="languageSelector"
        onChange={(newLang) => {
          console.log(newLang);
          dispatch(updateLanguage(newLang.value));
        }}
        options={languageOptions}
      />
    </div>
  );
};

export default LanguageSelector;
