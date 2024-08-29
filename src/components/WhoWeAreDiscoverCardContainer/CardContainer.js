import React from "react";
import Card from "../WhoWeAreDiscoverCard/Card";
import styles from "../../styles/WhoWeAreDiscoverStyles/WhoWeAreDiscover.module.css";
import { Grid } from "@mui/material";

const CardContainer = () => {
  return (
    <>
      <Grid container className={styles.MaincardContainer}>
        <Grid container className={styles.cardContainer}>
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <Card
                image={"/images/WhoWeAreDiscover/Enovation.png"}
                header={"Innovation at the Core:"}
                content={
                  "We aim to consistently deliver cutting-edge digital solutions that simplify technology, driving business growth and empowering  individuals to achieve their full potential in an ever-evolving  digital landscape."
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
      </Grid>
    </>
  );
};

export default CardContainer;
