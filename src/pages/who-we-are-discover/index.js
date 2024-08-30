import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhoWeAreDiscoverStyles/WhoWeAreDiscover.module.css";
import Card from "@/components/WhoWeAreDiscoverCard/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carusal from "@/components/WhoWeAreCarausal/Carausal";
import Strength from "@/components/OurStrength/Strength";
import CardContainer from "@/components/WhoWeAreDiscoverCardContainer/CardContainer";
import ContactUs from "@/components/Faq&Contactus/ContactUs";
import Faq from "@/components/Faq&Contactus/Faq";

const WhoWeAreDiscoverPage = () => {
  return (
    <>
      <Grid container className={styles.topcontainer}>
        <Grid item sm={12} xs={12}>
          <div className={styles.AboutUsContainer}>
            <h1 className={styles.AboutUsContaint}>About us</h1>
          </div>
        </Grid>
        <Grid item sm={12} xs={12}>
          <div>
            <p className={styles.AboutContent}>
              we are dedicated to crafting the future of technology. We have a
              message called <br /> <b> “Let’s craft the future.”</b> It is a
              value we uphold to inspire people and deliver successful products.
            </p>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={12} xs={12} className={styles.secondContainer}>
          <p className={styles.ptag}>our vision</p>
        </Grid>
        <Grid item sm={12} xs={12} className={styles.secondVision}>
          <h1 className={styles.htag}>Vision</h1>
        </Grid>
      </Grid>

      <CardContainer />
      <Carusal />
      <Strength />
      <div id="contactus">
        <ContactUs />
      </div>
      <Faq />
    </>
  );
};

export default WhoWeAreDiscoverPage;
