import React from "react";
import CardHolder from "../../atoms/CardHolder/CardHolder";
import CardContainer from "../../atoms/CardContainer/CardContainer";
import styles from "./ProjectInfoCard.module.css";

const ProjectInfoCard: React.FC<
  React.HtmlHTMLAttributes<HTMLDivElement>
> = () => {
  return (
    <CardContainer className={`${styles.cardContainer} `}>
      <div className={styles.cardDesktop}>
        <div className={styles.infoContainer}>
          <h3>$89,814</h3>
          <span>of $100,000 backed</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <h3>5,007</h3>
          <span>total backers</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <h3>56</h3>
          <span>days left</span>
        </div>
      </div>
    </CardContainer>
  );
};
export default ProjectInfoCard;
