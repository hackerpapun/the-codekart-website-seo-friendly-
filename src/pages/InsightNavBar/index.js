import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/Insight.module.css";
import { FaChevronRight } from "react-icons/fa6";

const Insight = () => {
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
            <p className={styles.WhatWeDoOverViewFirstElem}>
              Why Choose CodeKart?
            </p>
            <FaChevronRight />
          </div>
          <hr />
          <div
            className={`${styles.WhatWeDoOverView} ${
              styles.matginToContainet
            } ${activeSection === "service" && styles.active}`}
            onMouseEnter={() => handleSectionHover("service")}
          >
            <p className={styles.WhatWeDoOverViewFirstElem}>Careers</p>
            <FaChevronRight />
          </div>
          <hr />
        </Grid>

        <Grid item xs={12} md={8} className={styles.whatWeDoContaint}>
          {activeSection === "overview" && (
            <>
              <p className={styles.whatWeDoContaintParagraph}>
                Extraordinary expertise leads to remarkable results.
              </p>
              <p className={styles.whatWeDoContainerText}>
                We share news, insights, analysis, and research tailored to your
                unique interests to help you deepen your knowledge and impact.
              </p>
              <button className={styles.discoberAllSolution}>
                Discover Expert Insights
              </button>
            </>
          )}
          {activeSection === "industries" && (
            <Grid container className={styles.serviceTableContaint} spacing={7}>
              <Grid item sm={12} className={styles.tabelConatints}>
                Strength
              </Grid>
              <Grid item sm={12} className={styles.tabelConatints}>
                Vision
              </Grid>
            </Grid>
          )}
          {activeSection === "service" && (
            <>
              <p className={styles.whatWeDoContaintParagraph}>
                Want to be a global change-maker? Join our team.
              </p>
              <p className={styles.whatWeDoContainerText}>
                At CodeKart, we believe exceptional work begins with hiring,
                celebrating, and nurturing the best people from all walks of
                life.
              </p>
              <button className={styles.discoberAllSolution}>Join Us</button>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Insight;
