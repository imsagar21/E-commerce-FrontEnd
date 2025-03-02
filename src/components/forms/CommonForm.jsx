import React from "react";
import CommonInput from "./CommonInput";
import { useDispatch } from "react-redux";
import { handleOnChange } from "../../redux/slice/LoginSlice";
const InputType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({ formControls = [], formData, buttonText, onSubmit,formType }) => {
  const dispatch = useDispatch();

  function handleChange(e,getFormType) {
    dispatch(
      handleOnChange({
        formType:getFormType,
        field:e.target.name,
        value:e.target.value
      })
    );
  }
  function renderInputElements(getItem, index, getFormData,getFormType) {
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
            onChange={(e) => handleChange(e,getFormType)}
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
            onChange={(e) => handleChange(e, getFormData,getFormType)}
          />
        );
        return content;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((item, index) =>
          renderInputElements(item, index, formData,formType)
        )}
      </div>
      <button className="cursor-pointer" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default CommonForm;
