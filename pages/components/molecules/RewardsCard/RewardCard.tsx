import React from "react";
import GenericContainer from "../../atoms/GenericContainer/GericContainer";
import CustomHeading from "../../atoms/Header/CustomHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import style from "./RewardCard.module.css";
import CustomSpan from "../../atoms/Span/CustomSpan";

const RewardCard: React.FC<
  Edition & React.AllHTMLAttributes<HTMLAllCollection>
> = ({
  edition_description,
  edition_id,
  edition_name,
  unit_left,
  pledge_price,
}) => {
  console.log(unit_left);
  return (
    <GenericContainer>
      <div className={style.rewardCard}>
        <div className={style.rewardTitles}>
          <CustomHeading as={"h4"}>{edition_name}</CustomHeading>
          <CustomSpan>Pledge ${pledge_price} or more</CustomSpan>
        </div>
        <Paragraph>{edition_description}</Paragraph>
        <div className={style.rewardCta}>
          <div className={style.rewardInfo}>
            <CustomHeading as={"h1"}>{unit_left}</CustomHeading>
            <CustomSpan>left</CustomSpan>
          </div>
          <Button variant="secondary">Select Reward</Button>
        </div>
      </div>
    </GenericContainer>
  );
};

export default RewardCard;
