import React from "react";

function DropDown({ title, option, func }) {
  return (
    <div className="flex items-center justify-center">
      <select
        onChange={func}
        defaultValue="0"
        name="format"
        id="format"
        className="w-48 p-1 mb-2 border-2 bg-[#1F1E24] border-[#6556CF] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <option value="0" disabled>
          {title.toUpperCase()}
        </option>
        {option.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropDown;
