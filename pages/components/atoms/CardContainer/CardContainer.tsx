import React, { ReactNode } from "react";
import styles from "./CardContainer.module.css";
interface IcardContainer {
  children: React.ReactNode;
  variant?: "offset" | "";
}
const CardContainer: React.FC<
  IcardContainer & React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ children, variant = "" }) => {
  return (
    <div className={`${styles.cardContainer} ${styles[variant]}}`}>
      {children}
    </div>
  );
};

export default CardContainer;
