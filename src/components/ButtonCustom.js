import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/CustomButtonStyles/buttonCustom.module.css";
import { ImArrowRight2 } from "react-icons/im";

export default function ButtonCustom(props) {
  const { title, buttonStyles, icon, iconStyles, onClick, onClickLink } = props;

  return (
    <Button
      variant="contained"
      className={`${styles.buttonCustom} ${buttonStyles}`}
      onClick={onClick}
      href={onClickLink}
    >
      {title}
      {icon && (
        <ImArrowRight2 className={`${styles.buttonCustomImg} ${iconStyles}`} />
      )}
    </Button>
  );
}
