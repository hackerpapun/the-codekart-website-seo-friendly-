import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/HomeStyles/homebuttoncomp.module.css";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export default function HomeButtonComp({
  title,
  onClickLink,
  onClick,
  buttonStyles,
}) {
  return (
    <Link href={onClickLink} passHref>
      <Button
        variant="contained"
        className={`${styles.homebuttonComp} ${buttonStyles}`}
        onClick={onClick}
        aria-label={title} // Improves accessibility
      >
        {title}
        <Image
          src={IMAGES.home.uilArrowIcon}
          alt="Arrow icon indicating button action"
          className={styles.homebuttonCompImg}
          width={20}
          height={20}
        />
      </Button>
    </Link>
  );
}
