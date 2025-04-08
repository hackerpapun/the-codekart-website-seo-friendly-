"use client";
import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../styles/Home/HomeComp6.module.css";
import "react-multi-carousel/lib/styles.css";

const HomeComp6 = () => {
  const carauSalaData = [
    {
      containt: (
        <>
          <blockquote>
            “I had a wonderful experience and I would <br />
            highly recommend this business to others.”
          </blockquote>
        </>
      ),
      buttom: "Brooklyn Simmons - CEO, HCBA",
    },
    {
      containt: (
        <>
          <blockquote>
            “I had a wonderful experience and I would <br />
            highly recommend this business to others.”
          </blockquote>
        </>
      ),
      buttom: "Brooklyn Simmons - CEO, HCBA",
    },
    {
      containt: (
        <>
          <blockquote>
            “I had a wonderful experience and I would <br />
            highly recommend this business to others.”
          </blockquote>
        </>
      ),
      buttom: "Brooklyn Simmons - CEO, HCBA",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Grid container className={styles.carausalMainContainer}>
        <Grid sm={6} xs={12} className={styles.carausalleftcontaint}>
          <div>
            <h2 className={styles.carausalLeftContainer}>
              WHAT OTHERS <br />
              <span className={styles.spanContaint}>SAY</span> ABOUT US
            </h2>
          </div>
        </Grid>
        <Grid sm={6} xs={12} className={styles.carausal}>
          <Grid container>
            <Grid sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  showDots={true}
                  arrows={false}
                >
                  {carauSalaData.map((item, index) => (
                    <div
                      key={index}
                      className={styles.carouselItem}
                      aria-label={`Client testimonial ${index + 1}`}
                    >
                      <div>
                        <p className={styles.carausaltopContaint}>
                          {item.containt}
                        </p>
                        <p className={styles.carausalbuttomContaint}>
                          <cite>{item.buttom}</cite>
                        </p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeComp6;
