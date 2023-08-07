import React from "react";
import CardContainer from "../../atoms/CardContainer/CardContainer";
import style from "./AboutSection.module.css";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Header/CustomHeading";
import CustomHeading from "../../atoms/Header/CustomHeading";
import { commissioner } from "../../Fonts";
import GenericContainer from "../../atoms/GenericContainer/GericContainer";
import RewardCard from "../../molecules/RewardsCard/RewardCard";
const AboutSection: React.FC<
  ProjectsResponse & React.AllHTMLAttributes<HTMLDivElement>
> = ({ projects }) => {
  return (
    <div className={style.aboutContainer}>
      <CustomHeading
        as={"h1"}
        className={`${style.CustomHeading} ${commissioner.className}}`}
      >
        About this project
      </CustomHeading>
      <Paragraph>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </Paragraph>
      <Paragraph>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Paragraph>
      {projects.map((project) =>
        project.editions.map((edition) => (
          <RewardCard
            key={edition.edition_id}
            edition_description={edition.edition_description}
            edition_name={edition.edition_name}
            pledge_price={edition.pledge_price}
            unit_left={edition.unit_left}
            edition_id={edition.edition_id}
            project_id={edition.project_id}
          ></RewardCard>
        ))
      )}
    </div>
  );
};

export default AboutSection;
