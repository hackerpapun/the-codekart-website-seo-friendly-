import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/buttoncomp.module.css";
import UiArrow from "../assets/images/home/uil_arrow-up.png";
import Image from "next/image";

export default function ButtonComp({title, onClick, buttonStyles}) {
  return (
    <Button variant="contained" className={`${styles.buttonComp} ${buttonStyles}`} onClick={onClick}>
      {title}
      <Image src={UiArrow} alt="" className={styles.buttonCompImg} />
    </Button>
  );
}
