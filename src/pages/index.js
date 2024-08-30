"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import styles from "../styles/Home/home.module.css";
import HomeComp1 from "@/components/HomeComponents/HomeComp1";
import HomeComp2 from "@/components/HomeComponents/HomeComp2";
import HomeComp3 from "@/components/HomeComponents/HomeComp3";
import HomeComp4 from "@/components/HomeComponents/HomeComp4";
import HomeComp5 from "@/components/HomeComponents/HomeComp5";
import HomeComp6 from "@/components/HomeComponents/HomeComp6";
import HomeComp7 from "@/components/HomeComponents/HomeComp7";
import { montserrat } from "@/assets/fonts/fonts";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Carusal from "@/components/WhoWeAreCarausal/Carausal";
import WhatWeDoComp4 from "@/components/WhatWeDoComponents/WhatWeDoComp4";
import HomeComp8 from "@/components/HomeComponents/HomeComp8";

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  const handleHideMessage = () => {
    setShowCard(true);
  };
  const handleShowCard = () => {
    setShowCard(false);
  };

  const iconVariants = {
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    }),
  };


  const relatedReadingData = [
    {
      type: "Resource",
      title: "Over Ride The Digital Design With Additional",
      img: "/images/whatwedo/relatedReading1.svg",
      date: "August 3, 2024",
    },
    {
      type: "Resource",
      title: "Free consultation with experts",
      img: "/images/whatwedo/relatedReading2.svg",
      date: "August 10, 2024",
    },
    {
      type: "Resource",
      title: "Quality Design projects completed",
      img: "/images/whatwedo/relatedReading3.svg",
      date: "August 3, 2024",
    },
    {
      type: "Resource",
      title: "Task completion planning with timelines",
      img: "/images/whatwedo/relatedReading4.svg",
      date: "August 10, 2024",
    },
  ];
  

  return (
    // Animated Message Icon starts
    <Grid
      container
      className={`${styles.homeContainer} ${montserrat.variable}`}
    >
      <div className={styles.StickyContainer}>
        <div className={styles.MotionDiv}>
          <motion.div
            className={styles.MainMessageContainer}
            initial={{ x: 0 }}
            animate={{ x: showCard ? 250 : 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleHideMessage}
          >
            <img
              src={"/images/home/messageIcon.png"}
              alt="Course Image Placeholder"
              className={styles.messageContainer}
            />
          </motion.div>
          <motion.div
            className={styles.animatedCard}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: showCard ? 0 : 250, opacity: showCard ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <RxCross2 className={styles.crossIcon} onClick={handleShowCard} />

            <motion.div
              initial={{ x: 55, y: 65 }}
              animate={showCard ? "visible" : "hidden"}
              custom={{ x: 0, y: 0 }}
              variants={iconVariants}
              className={styles.ingramIcon}
            >
              <FaInstagram className={styles.inImage} />
            </motion.div>
            <motion.div
              initial={{ x: 85, y: 37 }}
              animate={showCard ? "visible" : "hidden"}
              custom={{ x: 0, y: 0 }}
              variants={iconVariants}
              className={styles.whatsApp}
            >
              <FaWhatsapp className={styles.inImage} />
            </motion.div>
            <motion.div
              initial={{ x: 85, y: -5 }}
              animate={showCard ? "visible" : "hidden"}
              custom={{ x: 0, y: 0 }}
              variants={iconVariants}
              className={styles.LinkdLn}
            >
              <FaLinkedinIn className={styles.inImage} />
            </motion.div>
            <motion.div
              initial={{ x: 55, y: -45 }}
              animate={showCard ? "visible" : "hidden"}
              custom={{ x: 0, y: 0 }}
              variants={iconVariants}
              className={styles.ContacUs}
            >
              <FaInstagram className={styles.inImage} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* // Animated Message Icon ends */}
      <HomeComp1 />
      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 relatedReadingData={relatedReadingData}/>
      <HomeComp5 />
      <HomeComp6 />
      <Grid container className={styles.marginTopContainer}>
        <HomeComp7 />
      </Grid>
      <HomeComp8 />
    </Grid>
  );
}
