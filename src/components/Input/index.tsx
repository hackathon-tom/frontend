import "./style.css";

import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  type?: React.HTMLInputTypeAttribute | undefined;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({
  label,
  placeholder,
  leftIcon,
  rightIcon,
  type = "text",
  value,
  setValue,
}: InputProps) => {
  return (
    <div className="input-container">
      <div className="input-label">{label}</div>
      <div className="input-content">
        <div className="input-content-left">
          <div className="input-icon input-icon-left">{leftIcon}</div>
          <input
            value={value}
            className="input-input"
            type={type}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="input-icon input-icon-left">{rightIcon}</div>
      </div>
    </div>
  );
};

export default Input;
