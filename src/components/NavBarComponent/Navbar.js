"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import styles from "../../styles/NavbarStyles/Navbar.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineNightsStay } from "react-icons/md";
import WhatAreWe from "./WhatWeAreNavbar";
import WhatWeDoNavbar from "./WhatWeDoNavbar";
import { ThemeContext } from "@/context/ThemeContext";
import Insight from "./InsightNavBar";
import Image from "next/image";
import MobileViewNavBar from "./MobileViewNavBar";
import { useRouter } from "next/router";
import { navconstants } from "@/constants/navconstants";
import { notosans } from "@/assets/fonts/fonts";
import { IMAGES } from "@/constants/images";

const Navbar = () => {
  const router = useRouter();
  const { theme, switchLightTheme, switchDarkTheme } =
    React.useContext(ThemeContext);

  const [isArrowUp, setIsArrowUp] = React.useState(false);
  const [whatAreWe, setWharareWe] = React.useState(false);
  const [InsightArrow, setInsightArrow] = React.useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const whatWeDoFun = () => {
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

  // Scroll behavior to hide/reveal the navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 100
      ) {
        setIsNavbarVisible(false);
      } else if (currentScrollPosition < lastScrollPosition) {
        setIsNavbarVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <>
      <div
        className={`${styles.ResponsiveContainer} ${
          isNavbarVisible ? styles.showNavbar : styles.hideNavbar
        } ${notosans.variable}`}
      >
        <Grid container className={styles.MainContainer}>
          <Grid item xs={12} md={8} className={styles.NavBarTopComponent}>
            <img
              src={IMAGES.logo.codekartlogo}
              alt="CodeKart Logo"
              className={styles.NavbarLogo}
              onClick={() => router.push(navconstants.home)}
              href="/"
            />

            <p
              className={styles.navBarparagraphContainer}
              onClick={() => {
                router.push(navconstants.home);
                setIsArrowUp(false);
                setWharareWe(false);
                setInsightArrow(false);
              }}
            >
              Home
            </p>

            <div
              className={`${styles.navBarparagraphContainer} ${
                isArrowUp ? styles.arrow_up : ""
              }`}
              onClick={whatWeDoFun}
            >
              What We do
              <MdKeyboardArrowDown className={styles.arrow_icon} />
            </div>

            <p
              className={`${styles.navBarparagraphContainer} ${
                whatAreWe ? styles.arrow_up : ""
              }`}
              onClick={whatAreWeFun}
            >
              Who We are
              <MdKeyboardArrowDown className={styles.arrow_icon} />
            </p>

            <p
              className={`${styles.navBarparagraphContainer} ${
                InsightArrow ? styles.arrow_up : ""
              }`}
              onClick={InsightFunction}
            >
              Insight
              <MdKeyboardArrowDown className={styles.arrow_icon} />
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.NavRightContainer}>
              <button onClick={() => router.push(`${navconstants.whoweare}#contactus`)} style={{ cursor: "pointer" }} className={styles.buttonContainer}>
                Connect with us
                <div className={styles.arrowContainer}>
                  <FaArrowRight className={styles.arrowIcon} />
                </div>
              </button>
              {/* <div className={styles.languageButtonContainer}>
                <Image
                  src={LanguageImage}
                  alt="Language logo"
                  className={styles.languageLogo}
                />
              </div>

              <button
                className={`${styles.LightDarkMood} ${
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
              </button> */}
            </div>
          </Grid>
        </Grid>
        <Grid container className={styles.dropdown_container} item sm={12}>
          <Grid
            container
            className={`${styles.dropdown} ${isArrowUp ? styles.active : ""}`}
          >
            {isArrowUp && <WhatWeDoNavbar onclickWhatwedoFun={whatWeDoFun} />}
          </Grid>
          <Grid
            container
            className={`${styles.dropdown} ${whatAreWe ? styles.active : ""}`}
          >
            {whatAreWe && <WhatAreWe setWharareWe={setWharareWe} />}
          </Grid>
          <Grid
            container
            className={`${styles.dropdown} ${
              InsightArrow ? styles.active : ""
            }`}
          >
            {InsightArrow && (
              <Insight onclickInsightFunction={InsightFunction} />
            )}
          </Grid>
        </Grid>
      </div>

      {/* Mobile View */}
      <div className={styles.MobileViewContainer}>
        <MobileViewNavBar />
      </div>
    </>
  );
};

export default Navbar;
