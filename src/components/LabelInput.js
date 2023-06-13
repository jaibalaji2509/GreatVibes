import React from "react";
import PropTypes from "prop-types";

function LabelInput({
  placeholder,
  widthFull,
  FWeight,
  FSize,
  label,
  isRequired,
}) {
  const className = {
    container: `px-4 py-2 border border-gray-300 ${widthFull}`,
  };
  const classNameLabel = {
    labelContainer: `font-sans not-italic ${FWeight} ${FSize} leading-5`,
  };
  return (
    <div>
      <div className="flex flex-col gap-3 mb-4">
        <div className={classNameLabel.labelContainer}>
          {label}
          <span className="text-red-600">{isRequired ? " *" : ""}</span>
        </div>
        <div>
          <input
            type="text"
            className={className.container}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

LabelInput.defaultProps = {
  widthFull: "w-full",
  FWeight: "font-normal",
  FSize: "text-base",
  placeholder: "",
  label: "",
  isRequired: false,
};

LabelInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default LabelInput;
