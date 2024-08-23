import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "../../../styles/NavbarStyles/whatWeDoNavbar.module.css";
import { FaChevronRight } from "react-icons/fa6";

const WhatWeDoNavbar = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionHover = (section) => {
    setActiveSection(section);
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
            <p className={styles.WhatWeDoOverViewFirstElem}>Industries</p>
            <FaChevronRight />
          </div>
          <hr />
          <div
            className={`${styles.WhatWeDoOverView} ${
              styles.matginToContainet
            } ${activeSection === "service" && styles.active}`}
            onMouseEnter={() => handleSectionHover("service")}
          >
            <p className={styles.WhatWeDoOverViewFirstElem}>Service</p>
            <FaChevronRight />
          </div>
          <hr />
        </Grid>

        <Grid item xs={12} md={8} className={styles.whatWeDoContaint}>
          {activeSection === "overview" && (
            <>
              <p className={styles.whatWeDoContaintParagraph}>
                At CodeKart, we make a difference through cutting-edge
                technology.
              </p>
              <p className={styles.whatWeDoContainerText}>
                For over 5 years, we have led the way in innovation, building
                brighter futures for businesses across various industries and
                countries.
              </p>
              <button className={styles.discoberAllSolution}>
                Discover all Solution
              </button>
            </>
          )}
          {activeSection === "industries" && (
            <Grid container className={styles.serviceTableContaint} spacing={7}>
              <Grid item sm={4} className={styles.tabelConatints}>
                Healthcare
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Finance
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Retail
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Manufacturing
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Automotive
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Logistics
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Real Estate
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Education
              </Grid>
              <Grid item sm={4} className={styles.tabelConatints}>
                Energy
              </Grid>
            </Grid>
          )}
          {activeSection === "service" && (
            <Grid container spacing={5} className={styles.serviceItems}>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                Custom Software Development
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                Mobile app development
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                Web app development
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                QA Testing
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                UI/UX Design
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                AI & Machine Learning
              </Grid>
              <Grid item sm={6} className={styles.ServicetabelConatints}>
                Resource outsourcing
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhatWeDoNavbar;
