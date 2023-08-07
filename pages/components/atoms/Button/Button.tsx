import React from "react";
import style from "./Button.module.css";
import { commissioner } from "../../Fonts";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<
  IButtonProps & React.BaseHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = "primary", className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`${style.btn} ${style[variant]} ${commissioner.className} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
