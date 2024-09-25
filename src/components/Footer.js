"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import styles from "../styles/Footer/Footer.module.css";
import Image from "next/image";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { IMAGES } from "@/constants/images";

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
    <>
      <Grid
        className={`${styles.footer2} ${montserrat.variable} ${notosans.variable}`}
      >
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={styles.companyName}>
              CodeKart Solutions Private Limited
            </Typography>
            <div className={styles.footerOrangeLine} />

            <Box className={styles.address}>
              <Typography mb={4}>
                Address 1: MBR Signity, KLV Layout, JP Nagar 8th phase,
                Bangalore, Pin-560076
              </Typography>
              <Typography mb={4}>
                Address 2: Phase-1, Saraswati Vihar, Duplex Number-2, Backside
                of Mani Tribhuvan, Bhubaneswar, Odisha 751024
              </Typography>
            </Box>
            <Box className={styles.socialMediaIconsContainer2}>
              <Box className={styles.iconContainer2}>
                <YouTube fontSize="small" className={styles.customIcon} />
              </Box>
              <Box className={styles.iconContainer2}>
                <Facebook fontSize="small" className={styles.customIcon} />
              </Box>
              <Box className={styles.iconContainer2}>
                <Twitter fontSize="small" className={styles.customIcon} />
              </Box>
              <Box className={styles.iconContainer2}>
                <Instagram fontSize="small" className={styles.customIcon} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className={styles.quickLinks}>
              Quick Links
            </Typography>
            <div className={styles.footerOtherOrangeLine} />

            <div className={styles.links}>
              <a href="#">About Company</a>
              <a href="#">Latest Services</a>
              <a href="#">Career</a>
              <a href="#">Blog & News</a>
              <a href="#">Contact Us</a>
            </div>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className={styles.services}>
              Services
            </Typography>
            <div className={styles.footerOtherOrangeLine} />

            <div className={styles.links}>
              <a href="#">Product Design</a>
              <a href="#">Design & Development</a>
              <a href="#">UX/UI Strategy</a>
              <a href="#">Software Development</a>
              <a href="#">Resource Outsourcing</a>
            </div>
          </Grid>
        </Grid>
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
        <Box className={styles.footerBottom}>
          <Image
            src={IMAGES.logo.codekartlogo}
            alt="CodeKart Logo"
            width={100}
            height={40}
            className={styles.footerImg2}
          />
          <Typography variant="body2" className={styles.copyright}>
            ©2024 All Rights Reserved By Codekart Solutions Pvt.Ltd.
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
