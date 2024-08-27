import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "../../../styles/NavbarStyles/whatWeAreNavbar.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/router";

const WhatWeAreNavbar = ({ setWharareWe }) => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  const router = useRouter();

  const handleNavigateToDiscover = () => {
    router.push("/who-we-are-discover");
    setWharareWe(false);
  };

  return (
    <Grid
      container
      className={styles.whatWeDoDropDown}
      style={{ marginTop: "20px" }}
    >
      <Grid container className={styles.whatweDoContainer}>
        <Grid item xs={12} md={3}>
          <div
            className={`${styles.WhatWeDoOverView} ${
              activeSection === "overview" && styles.active
            }`}
            onMouseEnter={() => handleSectionHover("overview")}
          >
            <p className={styles.WhatWeDoOverViewFirstElem}>Overview</p>
            <FaChevronRight />
          </div>
          <hr />
          <div
            className={`${styles.WhatWeDoOverView} ${
              styles.matginToContainet
            } ${activeSection === "industries" && styles.active}`}
            onMouseEnter={() => handleSectionHover("industries")}
          >
            <p className={styles.WhatWeDoOverViewFirstElem}>About Us</p>
            <FaChevronRight />
          </div>
          <hr />
          <div
            className={`${styles.WhatWeDoOverView} ${
              styles.matginToContainet
            } ${activeSection === "service" && styles.active}`}
            onMouseEnter={() => handleSectionHover("service")}
          >
            <p className={styles.WhatWeDoOverViewFirstElem}>Contact Us</p>
            <FaChevronRight />
          </div>
          <hr />
        </Grid>

        <Grid item xs={12} md={8} className={styles.whatWeDoContaint}>
          {activeSection === "overview" && (
            <>
              <p className={styles.whatWeDoContaintParagraph}>
                We’re in it for good, driving positive change for the benefit of
                all.
              </p>
              <p className={styles.whatWeDoContainerText}>
                Our expert, committed team puts our shared beliefs into action
                every day. Together, we combine innovation and collective
                knowledge to create the extraordinary.
              </p>
              <button
                className={styles.discoberAllSolution}
                onClick={handleNavigateToDiscover}
              >
                Discover the difference.
              </button>
            </>
          )}
          {activeSection === "industries" && (
            <Grid container className={styles.serviceTableContaint} spacing={7}>
              <Grid item sm={3} className={styles.tabelConatints}>
                Strength
              </Grid>
              <Grid item sm={3} className={styles.tabelConatints}>
                Vision
              </Grid>
            </Grid>
          )}
          {activeSection === "service" && (
            <Grid container spacing={5} className={styles.serviceItems}>
              <Grid item sm={3} className={styles.ServicetabelConatints}>
                FAQ
              </Grid>
              <Grid item sm={5} className={styles.ServicetabelConatints}>
                Get in Touch With Us
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhatWeAreNavbar;
