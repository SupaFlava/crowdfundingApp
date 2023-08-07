import React from "react";
import DesktopNavLinks from "../DesktopNavLinks/DesktopNavLinks";
import styles from "./DesktopNavContainer.module.css";
const DesktopNavContainer: React.FC<
  React.HtmlHTMLAttributes<HTMLDivElement>
> = () => {
  return (
    <div className={styles.desktopContainer}>
      <DesktopNavLinks />
    </div>
  );
};

export default DesktopNavContainer;
