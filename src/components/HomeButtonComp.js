import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/homebuttoncomp.module.css";
import UiArrow from "../assets/images/home/uil_arrow-up.png";
import Image from "next/image";

export default function HomeButtonComp({title, onClick, buttonStyles}) {
  return (
    <Button variant="contained" className={`${styles.homebuttonComp} ${buttonStyles}`} onClick={onClick}>
      {title}
      <Image src={UiArrow} alt="" className={styles.homebuttonCompImg} />
    </Button>
  );
}
