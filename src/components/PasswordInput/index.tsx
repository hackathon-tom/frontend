import React from "react";
import Input from "../Input";

import { BsEye, BsEyeSlash } from "react-icons/bs";

interface PasswordInputProps {
  value: string;
  setValue: (value: string) => void;
}

const PasswordInput = ({ value, setValue }: PasswordInputProps) => {
  const [isHidden, setIsHidden] = React.useState(true);

  const toggle = () => setIsHidden(!isHidden);

  return (
    <Input
      value={value}
      setValue={setValue}
      type={isHidden ? "password" : "text"}
      rightIcon={
        isHidden ? (
          <BsEyeSlash
            color="#667085"
            size={20}
            onClick={toggle}
            className="cursor-pointer"
          />
        ) : (
          <BsEye
            color="#667085"
            size={20}
            onClick={toggle}
            className="cursor-pointer"
          />
        )
      }
      label={"Password"}
      placeholder={"●●●●●●●●"}
    />
  );
};

export default PasswordInput;
