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
// import WhatWeDo from "@/components/MobileViewNavBar/WhatWeDo";
// import WhatAreWe from "@/components/NavBarComponent/WhatAreWe";
import WhatAreWe from "./NavBarComponent/WhatWeAreNavbar";
import WhatWeDo from "./NavBarComponent/WhatWeDoNavbar";
import { ThemeContext } from "@/context/ThemeContext";
import CodekartLogo from "../assets/images/navbar/codekartlogo.png";
import LanguageImage from "../assets/images/navbar/language.png";
// import Insight from "@/components/NavBarComponent/InsightNavBar";
import Insight from "./NavBarComponent/InsightNavBar";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import MobileViewNavBar from "./NavBarComponent/MobileViewNavBar";
import { useRouter } from "next/router";
import { navconstants } from "@/constants/navconstants";

const Navbar = () => {
  const router = useRouter();
  const { theme, switchLightTheme, switchDarkTheme } =
    React.useContext(ThemeContext);

  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [isArrowUp, setIsArrowUp] = React.useState(false);
  const [whatAreWe, setWharareWe] = React.useState(false);
  const [InsightArrow, setInsightArrow] = React.useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

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
        }`}
      >
        <Grid container className={styles.MainContainer}>
          <Grid item xs={12} md={8} className={styles.NavBarTopComponent}>
            <Image
              src={CodekartLogo}
              alt="CodeKart Logo"
              className={styles.NavbarLogo}
              onClick={() => router.push(navconstants.home)}
            />

            <p className={styles.navBarparagraphContainer} onClick={() => router.push(navconstants.home)}>Home</p>

            <div
              className={`${styles.navBarparagraphContainer} ${
                isArrowUp ? styles.arrow_up : ""
              }`}
              onClick={toggleArrow}
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
              What We are
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
              </button>
            </div>
          </Grid>
        </Grid>
        <Grid container className={styles.dropdown_container} item sm={12}>
          <Grid
            container
            className={`${styles.dropdown} ${isArrowUp ? styles.active : ""}`}
          >
            {isArrowUp && <WhatWeDo />}
          </Grid>
          <Grid
            container
            className={`${styles.dropdown} ${whatAreWe ? styles.active : ""}`}
          >
            {whatAreWe && <WhatAreWe />}
          </Grid>
          <Grid
            container
            className={`${styles.dropdown} ${
              InsightArrow ? styles.active : ""
            }`}
          >
            {InsightArrow && <Insight onclickInsightFunction={InsightFunction} />}
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
