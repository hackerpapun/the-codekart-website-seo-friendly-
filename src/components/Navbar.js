"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineNightsStay } from "react-icons/md";
import WhatWeDo from "@/pages/WhatWeDo";
import { ThemeContext } from "@/context/ThemeContext";
import CodekartLogo from "../assets/images/navbar/codekartlogo.png";
import LanguageImage from "../assets/images/navbar/language.png";
import Image from "next/image";

const Navbar = () => {
  const { theme, switchLightTheme, switchDarkTheme } =
    React.useContext(ThemeContext);

  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [isArrowUp, setIsArrowUp] = React.useState(false);
  const [whatAreWe, setWharareWe] = React.useState(false);
  const [InsightArrow, setInsightArrow] = React.useState(false);

  const toggleArrow = () => {
    setIsArrowUp(!isArrowUp);
    setWharareWe(false);
    setInsightArrow(false);
  };
  const whatAreWeFun = () => {
    setWharareWe(!whatAreWe);
    setInsightArrow(false);
    setIsArrowUp(false);
  };
  const InsightFunction = () => {
    setInsightArrow(!InsightArrow);
    setWharareWe(false);
    setIsArrowUp(false);
  };
  return (
    <>
      <Grid container className={styles.MainContainer}>
        <Grid item xs={12} md={8} className={styles.NavBarTopComponent}>
          <Image
            src={CodekartLogo}
            alt="CodeKart Logo"
            className={styles.NavbarLogo}
          />

          <p className={styles.navBarparagraphContainer}>Home</p>

          <p
            className={`navBarparagraphContainer ${
              isArrowUp && styles.arrow_up
            }`}
            onClick={toggleArrow}
          >
            What We do
            <MdKeyboardArrowDown className={styles.arrow_icon} />
          </p>

          <p
            className={`navBarparagraphContainer ${
              whatAreWe && styles.arrow_up
            }`}
            onClick={whatAreWeFun}
          >
            What are We
            <MdKeyboardArrowDown className={styles.arrow_icon} />
          </p>

          <p
            className={`navBarparagraphContainer ${
              InsightArrow && styles.arrow_up
            }`}
            onClick={InsightFunction}
          >
            Insight
            <MdKeyboardArrowDown className={styles.arrow_icon} />
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.NavRightContainer}>
            <button className={styles.buttonContainer}>
              Contact with us
              <div className={styles.arrowContainer}>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
            </button>
            <div className={styles.languageButtonContainer}>
              <Image
                src={LanguageImage}
                alt="Language logo"
                className={styles.languageLogo}
              />
            </div>

            <button
              className={`LightDarkMood ${
                theme === "dark" ? styles.dark_mode : styles.light_mode
              }`}
              onClick={() => {
                if (theme === "dark") {
                  switchLightTheme();
                } else {
                  switchDarkTheme();
                }
              }}
            >
              <div className={styles.icon_container}>
                <IoIosSunny className={styles.sun_icon} />
                <MdOutlineNightsStay className={styles.moon_icon} />
              </div>
            </button>
          </div>
        </Grid>
      </Grid>
      <Grid container className={styles.dropdown_container} item sm={12}>
        <Grid container className={`dropdown ${isArrowUp && styles.active}`}>
          {isArrowUp ? <WhatWeDo /> : ""}
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
