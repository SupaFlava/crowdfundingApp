import React from "react";
import style from "./GenericContainer.module.css";

interface IGenericContainer {
  children: React.ReactNode;
  className?: string;
}
const GenericContainer: React.FC<
  IGenericContainer & React.AllHTMLAttributes<HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div className={`${style.genericContainer} ${className}`}>{children}</div>
  );
};

export default GenericContainer;
