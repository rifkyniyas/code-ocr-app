import { useSelector, useDispatch } from "react-redux";
import { updateLanguage } from "@/redux/codeEditorSlice";
import { langs } from "@uiw/codemirror-extensions-langs";
import Select from "react-select";

const LanguageSelector = () => {
  const codeLanguage = useSelector((state) => state.codeEditor.language);
  console.log(codeLanguage);
  const dispatch = useDispatch();
  let defaultIndex = 42; //Javascript
  const languageOptions = Object.keys(langs)
    .sort()
    .map((lang, index) => {
      if (lang == codeLanguage) defaultIndex = index;
      return {
        value: lang,
        label: lang.charAt(0).toUpperCase() + lang.slice(1), //Capitalize the first letter
      };
    });
  return (
    <div className="flex flex-col">
      <label htmlFor="langSelect" className="text-left font-medium mb-2">
        Select Language
      </label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={languageOptions[defaultIndex]}
        isSearchable={true}
        name="languageSelector"
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        onChange={(newLang) => {
          dispatch(updateLanguage(newLang.value));
        }}
        options={languageOptions}
      />
    </div>
  );
};

export default LanguageSelector;
