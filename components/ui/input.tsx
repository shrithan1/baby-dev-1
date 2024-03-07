import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return <input type="text" placeholder={placeholder} {...rest} />;
};

export default Input;
