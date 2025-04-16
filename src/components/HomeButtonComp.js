import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/HomeStyles/homebuttoncomp.module.css";
import Image from "next/image";
import { IMAGES } from "@/constants/images";

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
        <img
          src={IMAGES.home.uilArrowIcon}
          alt=""
          className={styles.homebuttonCompImg}
        />
      </a>
    </Button>
  );
}
