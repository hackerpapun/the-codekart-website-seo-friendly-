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
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  X,
} from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { IMAGES } from "@/constants/images";
import { RedirectToNewTab } from "@/constants/RedirectToNewTab";
import Link from "next/link";
import { navconstants } from "@/constants/navconstants";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
    <footer
      className={`${styles.footer2} ${montserrat.variable} ${notosans.variable}`}
    >
      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className={styles.companyName}>
            CodeKart Solutions Private Limited
          </Typography>
          <div className={styles.footerOrangeLine} />

          <address className={styles.address}>
            <Typography mb={4}>
              Address 1: MBR Signity, KLV Layout, JP Nagar 8th phase, Bangalore,
              Pin-560076
            </Typography>
            <Typography mb={4}>
              Address 2: Phase-1, Saraswati Vihar, Duplex Number-2, Backside of
              Mani Tribhuvan, Bhubaneswar, Odisha 751024
            </Typography>
          </address>

          <Box className={styles.socialMediaIconsContainer2}>
            <RedirectToNewTab
              url={"https://www.linkedin.com/company/codekart/"}
            >
              <Box className={styles.iconContainer2}>
                <LinkedIn fontSize="small" className={styles.customIcon} />
              </Box>
            </RedirectToNewTab>
            <RedirectToNewTab url={"https://www.facebook.com/TheCodeKart/"}>
              <Box className={styles.iconContainer2}>
                <Facebook fontSize="small" className={styles.customIcon} />
              </Box>
            </RedirectToNewTab>
            <RedirectToNewTab url={"https://x.com/codekart"}>
              <Box className={styles.iconContainer2}>
                <X fontSize="small" className={styles.customIcon} />
              </Box>
            </RedirectToNewTab>
            <RedirectToNewTab url={"https://www.instagram.com/thecodekart/"}>
              <Box className={styles.iconContainer2}>
                <Instagram fontSize="small" className={styles.customIcon} />
              </Box>
            </RedirectToNewTab>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}></Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" className={styles.quickLinks}>
            Quick Links
          </Typography>
          <div className={styles.footerOtherOrangeLine} />
          <nav aria-label="Footer Navigation">
            <ul className={styles.links}>
              <li>
                <Link href={navconstants.whoweare}>About Company</Link>
              </li>
              <li>
                <Link href={navconstants.whatwedo + "/#OurService"}>
                  Latest Services
                </Link>
              </li>
              <li>
                <Link href={navconstants.insights + "/#allOpenPositions"}>
                  Career
                </Link>
              </li>
              <li>
                <a href="#">Blog & News</a>
              </li>
              <li>
                <Link href={navconstants.whoweare + "/#contactus"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" className={styles.services}>
            Services
          </Typography>
          <div className={styles.footerOtherOrangeLine} />
          <nav aria-label="Service Navigation">
            <ul className={styles.links}>
              <li>
                <Link href={navconstants.webAndAppDevelopment}>
                  Web & App development
                </Link>
              </li>
              <li>
                <Link href={navconstants.AIandMachineLearning}>
                  AI and Machine Learning
                </Link>
              </li>
              <li>
                <Link href={navconstants.geneartiveAI}>Generative AI</Link>
              </li>
              <li>
                <Link href={navconstants.iotAndDigitalInnovation}>
                  IOT And Digital Innovation
                </Link>
              </li>
              <li>
                <Link href={navconstants.cloudAndDataSolutions}>
                  Cloud And Data Solutions
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>

      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          className={styles.backToTopIcon}
          aria-label="Back to top"
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
          alt="CodeKart Company Logo"
          width={100}
          height={40}
          className={styles.footerImg2}
        />
        <Typography variant="body2" className={styles.copyright}>
          ©2024 All Rights Reserved By CodeKart Solutions Pvt. Ltd.
        </Typography>
      </Box>
    </footer>
  );
}
