import React from "react";
import style from "./Paragraph.module.css";
interface IParegraph {
  children: React.ReactNode;
}

const Paragraph: React.FC<
  IParegraph & React.AllHTMLAttributes<HTMLParagraphElement>
> = ({ children }) => {
  return <p className={style.customPara}>{children}</p>;
};

export default Paragraph;
