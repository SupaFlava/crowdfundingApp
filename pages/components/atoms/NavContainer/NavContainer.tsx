import React from "react";
import styles from "./NavContainer.module.css";
import Logo from "../Logo/Logo";
import LogoBurger from "../LogoBurger/LogoBurger";
import DesktopNavContainer from "../DesktopNavContainer/DesktopNavContainer";

const NavContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <DesktopNavContainer />

      <LogoBurger />
    </div>
  );
};

export default NavContainer;
