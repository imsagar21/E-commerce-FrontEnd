import React from "react";
import CommonInput from "./CommonInput";
const InputType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onSubmit,
}) => {
  function renderInputElements(getItem, index, getFormData) {
    let content = null;
    switch (getItem.commonType) {
      case InputType.INPUT:
        content = (
          <CommonInput
            key={index}
            label={getItem.label}
            name={getItem.name}
            type={getItem.type}
            value={getFormData[getItem.name]}
            placeholder={getItem.placeholder}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        );
        return content;

      default:
        content = (
          <CommonInput
            key={index}
            label={getItem.label}
            name={getItem.name}
            type={getItem.type}
            value={getFormData[getItem.name]}
            placeholder={getItem.placeholder}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        );
        return content;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((item, index) =>
          renderInputElements(item, index, formData)
        )}
      </div>
      <button className="cursor-pointer" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default CommonForm;
