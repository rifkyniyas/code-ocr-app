import { Icon } from "@iconify/react";
import { useState } from "react";
const ComboBox = ({ options, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSelectedValue(inputValue);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setFilteredOptions(options);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Select an option"
        value={selectedValue}
        onChange={handleChange}
        className="appearance-none rounded-md px-4 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
      />
      <select
        className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
        aria-label="Dropdown icon"
      >
        <Icon icon="gridicons:dropdown" />
      </select>
      {filteredOptions.length > 0 && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 py-1 text-gray-800 shadow-md z-10">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 cursor-pointer ${
                option === selectedValue ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
