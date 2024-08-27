"use client";
import React, { useState, useEffect } from "react";
import CodekartLogo from "../assets/images/navbar/codekartlogo.png";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import styles from "../styles/Footer/Footer.module.css";
import { montserrat } from "@/assets/fonts/fonts";
import Image from "next/image";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Grid
      container
      className={styles.footer}
      direction="column"
      alignItems="center"
    >
      <Image
        src={CodekartLogo}
        alt="CodeKart Logo"
        width={100}
        height={40}
        className={styles.footerImg}
      />

      <Typography variant="body2" align="center">
        CodeKart Solutions Private Limited
        <br />
        Phase-1, Saraswati Vihar, Duplex Number-2,
        <br />
        Backside of Mani Tribhuvan
        <br />
        Bhubaneswar, Odisha 751024
      </Typography>

      <Box className={styles.socialMediaIconsContainer}>
        <Box className={styles.iconContainer}>
          <YouTube fontSize="small" className={styles.customIcon} />
        </Box>
        <Box className={styles.iconContainer}>
          <Facebook fontSize="small" className={styles.customIcon} />
        </Box>
        <Box className={styles.iconContainer}>
          <Twitter fontSize="small" className={styles.customIcon} />
        </Box>
        <Box className={styles.iconContainer}>
          <Instagram fontSize="small" className={styles.customIcon} />
        </Box>
      </Box>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          className={styles.backToTopIcon}
          aria-label="back to top"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
      <Divider sx={{ width: "100%", backgroundColor: "#d3d3d3", my: 2 }} />
      <Typography
        variant="caption"
        align="center"
        className={styles.footerCopyright}
      >
        @2024 All Rights Reserved By Codekart Solutions Pvt.Ltd.
      </Typography>
    </Grid>
  );
}
