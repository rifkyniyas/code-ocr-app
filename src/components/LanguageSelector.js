import { langs } from "@uiw/codemirror-extensions-langs";
import Select from "react-select";

const LanguageSelector = () => {
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
        isClearable={true}
        name="languageSelector"
        options={languageOptions}
      />
    </div>
  );
};

export default LanguageSelector;
