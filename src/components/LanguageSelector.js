import { langs } from "@uiw/codemirror-extensions-langs";
const LanguageSelector = () => {
  return (
    <div>
      <label htmlFor="langSelect">Select Language</label>
      <select name="langSelect" id="langSelect">
        {Object.keys(langs)
          .sort()
          .map((lang) => (
            <option value={lang}>
              {
                /* Capitalize the first word */
                lang.charAt(0).toUpperCase() + lang.slice(1)
              }
            </option>
          ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
