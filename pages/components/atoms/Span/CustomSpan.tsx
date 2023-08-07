import React from "react";
import style from "./CustomSpan.module.css";
interface ICustomSpan {
  children: React.ReactNode;
}

const CustomSpan: React.FC<
  ICustomSpan & React.AllHTMLAttributes<HTMLSpanElement>
> = ({ children, ...props }) => {
  return <span className={style.customSpan}>{children}</span>;
};

export default CustomSpan;
