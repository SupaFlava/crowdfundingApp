import { useEffect, useRef } from "react";
import style from "./DialogModal.module.css";
import AboutSection from "../../organisms/AboutSection/AboutSection";
import RewardCard from "../RewardsCard/RewardCard";
import CustomHeading from "../../atoms/Header/CustomHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import GenericContainer from "../../atoms/GenericContainer/GericContainer";

interface IDialogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogModal: React.FC<IDialogModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    if (isOpen) {
      dialog?.showModal();
      document.addEventListener("keydown", handleEscape);
    } else {
      dialog?.close();
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  return (
    <dialog
      datatype="data-model"
      className="dialog"
      id="dialog"
      ref={dialogRef}
    >
      <div className={style.dialogContainer}>
        <div className={style.modalHeader}>
          <CustomHeading as={"h2"}>back this project</CustomHeading>
          <button onClick={onClose}>Close</button>
        </div>
        <Paragraph>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?{" "}
        </Paragraph>
        <GenericContainer className={style.container}>
          <form>
            <div className={style.radioContainer}>
              <input type="radio"></input>
              <CustomHeading as={"h3"}>Pledge with no reward</CustomHeading>
            </div>
            <div className={style.paraContainer}>
              <Paragraph>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </Paragraph>
            </div>
          </form>
        </GenericContainer>
      </div>
    </dialog>
  );
};

export default DialogModal;
