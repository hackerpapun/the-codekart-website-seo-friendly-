import React from "react";
import styles from "../../styles/StrengthCss/Strength.module.css";
import { Grid } from "@mui/material";
import { getPublicImageUrl } from "@/constants/images";

const Strength = () => {
  return (
    <>
      <Grid container id="ourstrength" className={styles.strengthContainer}>
        <Grid item sm={12} xs={12} className={styles.firstStrength}>
          <p className={styles.strengthParagraph} aria-label="Our Strength">
            our strength
          </p>
        </Grid>

        <Grid item sm={12} xs={12} className={styles.secondStrength}>
          <h2 className={styles.strengthHeader}>Strength</h2>
        </Grid>
      </Grid>

      <Grid container className={styles.MainMainStrengthContainer}>
        <Grid container className={styles.MainStrengthContainer}>
          <Grid
            container
            className={styles.SubStrengthContainer}
            component="section"
            aria-labelledby="strength-title"
          >
            <Grid item sm={6} xs={12} className={styles.leftStrengthContainer}>
              <div>
                <h3 className={styles.contentLeftContainer} id="strength-title">
                  Innovative Solutions
                </h3>
                <p className={styles.contentRightContainer}>
                  We deliver creative and forward-thinking solutions that meet
                  the unique needs of our clients.
                </p>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <img
                src={getPublicImageUrl(
                  "/images/WhoWeAreDiscover/strenghtImage.png"
                )}
                alt="Team delivering innovative solutions"
                className={styles.rightStrengthContainerPhoto}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Strength;
