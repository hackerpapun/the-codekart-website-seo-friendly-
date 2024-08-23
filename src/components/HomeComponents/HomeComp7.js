"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp7.module.css";
import Button from "@mui/material/Button";

export default function HomeComp7() {
  return (
    <div className={styles.hero7}>
      <div className={styles.hero7Title}>
        Request a proposal or consult, Feel free to contact us Please.
      </div>
      <Button variant="contained" className={styles.hero7Button}>
        Contact Us
      </Button>
    </div>
  );
}
