import React from "react";

function RadioButton({
  inputLabel,
  FWeight,
  FSize,
  label,
  isRequired,
  RfwEIGHT,
  RfSize,
  radioName,
}) {
  const classNames = {
    container: `border-#D8D8D8-300 `,
    radioLabel: `${RfwEIGHT} ${RfSize} text-gray-400`,
    inputLabel: `flex flex-row gap-2 items-center`,
    labelContainer: `font-sans not-italic ${FWeight} ${FSize} leading-5`,
  };

  return (
    <div>
      <div className="flex flex-col gap-3 mb-4">
        <div className={classNames.labelContainer}>
          {label}
          <span className="text-red-600">{isRequired ? " *" : ""}</span>
        </div>
        <div className={classNames.inputLabel}>
          <input
            type="radio"
            className={classNames.container}
            name={radioName}
          />
          <span className={classNames.radioLabel}>{inputLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
