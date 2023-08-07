import Button from "@/pages/components/atoms/Button/Button";
import logo from "../../../../public/assets/logo-mastercraft.svg";
import bookmark from "../../../../public/assets/icon-bookmark.svg";

import React, { HtmlHTMLAttributes, useState } from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import CardHolder from "@/pages/components/atoms/CardHolder/CardHolder";
import CardContainer from "@/pages/components/atoms/CardContainer/CardContainer";
import DialogModal from "../DialogModal/DialogModal";

const ProjectCard: React.FC<
  ProjectsResponse & React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ projects }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <CardContainer className={styles.cardContainer} variant="offset">
      <Image className={styles.logo} src={logo} alt="logo" />
      {projects.map((project) => (
        <>
          <h2> {project.project_name}</h2>
          <p> {project.project_description}</p>
        </>
      ))}

      <div className={styles.cta}>
        <Button onClick={handleOpenModal}>Back this project </Button>
        <DialogModal isOpen={isModalOpen} onClose={handleCloseModal} />

        <div className={styles.bookCard}>
          <Image className={styles.bookmark} src={bookmark} alt="bookmark" />
          <Button className={styles.bookButton} variant="secondary">
            Bookmark
          </Button>
        </div>
      </div>
    </CardContainer>
  );
};
export default ProjectCard;
