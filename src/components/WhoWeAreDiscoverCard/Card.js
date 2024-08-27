import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhoWeAreDiscoverCardStyles/Card.module.css";

const Card = ({ image, header, content }) => {
  return (
    <>
      <Grid container className={styles.cardContainer}>
        <Grid className={styles.CardImageContainer}>
          <Grid sm={12} xs={12} className={styles.CardImageContainerResponsive}>
            <img src={image} alt="" className={styles.Discoverimage} />
          </Grid>
        </Grid>
        <Grid sm={12} xs={12}>
          <p className={styles.ptag}>
            <b>{header} </b>
          </p>
          <p className={styles.ptag}>{content}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
