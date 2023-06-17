import Select from "react-select";

const ThemeSelector = () => {
  return (
    <div>
      <label htmlFor="themeSelect">Select Theme</label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={"androidstudio"}
        isSearchable={true}
        name="color"
        options={[
          { value: "androidstudio", label: "androidstudio" },
          { value: "androidstudios", label: "androidstudios" },
        ]}
      />
      {/* <select name="themeSelect" id="themeSelect">
        <option value="androidstudio">Android Studio</option>
        <option value="dracula">Dracula</option>
        <option value="eclipse">Eclipse</option>
        <option value="githubDark">Github Dark</option>
        <option value="githubLight">Github Light</option>
        <option value="materialDark">Material Dark</option>
        <option value="materialLight">Material Light</option>
        <option value="sublime">Sublime Text</option>
        <option value="vscodeDark">Visual Studio Code</option>
        <option value="xcodeDark">X Code Dark</option>
        <option value="xcodeLight">X Code Light</option>
      </select> */}
    </div>
  );
};

export default ThemeSelector;
