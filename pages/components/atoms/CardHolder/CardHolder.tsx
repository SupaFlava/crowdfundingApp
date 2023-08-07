import React from "react";
import styles from "./CardHolder.module.css";

interface IcardHolder {
  children: React.ReactNode;
}
const CardHolder: React.FC<
  IcardHolder & React.AllHTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return <div className={styles.cardHolder}>{children}</div>;
};
export default CardHolder;
