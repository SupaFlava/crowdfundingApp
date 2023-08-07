import logo from "../../../../public/assets/logo.svg";
import Image from "next/image";
import styles from "./Logo.module.css";

const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <Image className={styles.logo} src={logo} alt="Picture of the author" />
  );
};

export default Logo;
