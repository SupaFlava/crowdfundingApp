import logo from "../../../../public/assets/icon-hamburger.svg";
import Image from "next/image";
import styles from "./LogoBurger.module.css";

const LogoBurger: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <Image className={styles.burger} src={logo} alt="Picture of the author" />
  );
};

export default LogoBurger;
