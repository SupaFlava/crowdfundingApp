import React from "react";
import Logo from "../../atoms/Logo/Logo";
import styles from "./Navbar.module.css";
import NavContainer from "../../atoms/NavContainer/NavContainer";
import LogoBurger from "../../atoms/LogoBurger/LogoBurger";
import DesktopNavContainer from "../../atoms/DesktopNavContainer/DesktopNavContainer";
const Navbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className={styles.navbar}>
      <NavContainer>
        <Logo />
        <LogoBurger />
      </NavContainer>
    </div>
  );
};

export default Navbar;
