import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/HomeStyles/homebuttoncomp.module.css";
import UiArrow from "../assets/images/home/uil_arrow-up.png";
import Image from "next/image";

export default function HomeButtonComp({
  title,
  onClickLink,
  onClick,
  buttonStyles,
}) {
  return (
    <Button
      variant="contained"
      className={`${styles.homebuttonComp} ${buttonStyles}`}
      onClick={onClick}
    >
      <a href={onClickLink} style={{ textDecoration: "none", color: "#000" }}>
        {title}
        <Image src={UiArrow} alt="" className={styles.homebuttonCompImg} />
      </a>
    </Button>
  );
}
