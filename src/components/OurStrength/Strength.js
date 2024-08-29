import React from "react";
import styles from "../../styles/StrengthCss/Strength.module.css";
import { Grid } from "@mui/material";

const Strength = () => {
  return (
    <>
      <Grid container className={styles.strengthContainer}>
        <Grid item sm={12} xs={12} className={styles.firstStrength}>
          <p className={styles.strengthParagraph}>our strength</p>
        </Grid>

        <Grid item sm={12} xs={12} className={styles.secondStrength}>
          <h1 className={styles.strengthHeader}>Strength</h1>
        </Grid>
      </Grid>
      <Grid container className={styles.MainMainStrengthContainer}>
        <Grid container className={styles.MainStrengthContainer}>
          <Grid container className={styles.SubStrengthContainer}>
            <Grid item sm={6} xs={12} className={styles.leftStrengthContainer}>
              <div>
                <h1 className={styles.contentLeftContainer}>
                  Innovative Solutions
                </h1>
                <p className={styles.contentRightContainer}>
                  We deliver creative and forward-thinking solutions that meet
                  the unique needs of our clients.
                </p>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <img
                src="/images/WhoWeAreDiscover/strenghtImage.png"
                alt=""
                className={styles.rightStrengthContainerPhoto}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Strength;
