import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhoWeAreDiscoverStyles/WhoWeAreDiscover.module.css";
import Card from "@/components/WhoWeAreDiscoverCard/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carusal from "@/components/WhoWeAreCarausal/Carausal";
import Strength from "@/components/OurStrength/Strength";
import Faq from "@/components/Faq&Contactus/Faq";
import ContactUs from "@/components/FAQ/ContactUs";

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
          <h1 className={styles.htag}>vision</h1>
        </Grid>
      </Grid>

      <Grid container className={styles.cardContainer}>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <Card
              image={"/images/WhoWeAreDiscover/Enovation.png"}
              header={"Innovation at the Core:"}
              content={
                "We aim to consistently deliver cutting-edge digital solutions that simplify technology, driving business growth and empowering  individuals to achieve their full potential in an ever-evolving  digital landscape"
              }
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card
              image={"/images/WhoWeAreDiscover/Empowerd.png"}
              header={"Client-Centered Excellence: "}
              content={
                "Our commitment is to exceed client expectations by delivering reliable, high-quality products and services that are tailored to meet unique needs, fostering long-term partnerships based on trust and mutual success."
              }
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card
              image={"/images/WhoWeAreDiscover/ClientCenterd.png"}
              header={"Empowering Through Technology: "}
              content={
                "We strive to make technology accessible and intuitive, enabling businesses and individuals to harness the power of digital tools for transformative outcomes, ensuring they remain competitive in a dynamic market."
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Carusal />
      <Strength />
      <ContactUs />
      <Faq />
    </>
  );
};

export default WhoWeAreDiscoverPage;
