import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhatWeDoStyles/whatWeDoServicesGlobalComp.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import ButtonCustom from "../ButtonCustom";
import RelatedReadingComp from "../RelatedReadingComp/RelatedReadingComp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function WhatWeDoServicesGlobalComp({
  cardData,
  relatedReadingData,
  constantData,
}) {
  return (
    <Box className={`${notosans.variable} ${montserrat.variable}`}>
      {/* image bg part 1 */}
      <div
        className={styles.wwdServicesGlobal1MainContainer}
      >
        {constantData?.bgVideo ? (
          <video
            src={constantData?.bgVideo}
            autoPlay
            muted
            loop
            preload="none"
            className={styles.wwdServicesGlobal1ContainerVideo}
          />
        ) : (
          <img
            src={constantData?.bgImage}
            alt="Bg Image"
            className={styles.wwdServicesGlobal1ContainerImage}
          />
        )}

        <Grid
          container
          className={`${styles.wwdServicesGlobal1}`}
        >
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={9}>
            <div className={styles.wwdServicesGlobal2}>
              Service / {constantData?.name}
            </div>
            <div className={styles.wwdServicesGlobal3}>
              {constantData?.part1Text1}
            </div>
            <div className={styles.wwdServicesGlobal3}>
              {constantData?.part1Text2}
            </div>
            <div className={styles.wwdServicesGlobal4}>
              Let's talk
              <span className={styles.arrowContainer}>
                <FaCircleArrowRight size={35} />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
      </div>

      {/* part 2 */}
      <Grid container className={styles.wwdServicesGlobal5} spacing={10}>
        <Grid item xs={12} lg={1}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <div className={styles.wwdServicesOrangeline} />
          <div className={styles.wwdServicesGlobal6}>
            {constantData?.part2Description}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <img
            src={constantData?.part2Img}
            className={styles.wwdServicesGlobal7}
          />
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>

      {/* part 3 */}
      <Grid container className={styles.wwdServicesGlobal8}>
        <Grid item xs={12} lg={1}></Grid>
        <Grid item xs={12} md={10}>
          <div className={styles.wwdServicesGlobal9}>
            Most Desired Outcomes from the Resource Outsourcing
          </div>
          {/* dont put carousel inside Grid */}
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            partialVisible
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {cardData?.map((item, i) => (
              <div
                key={i}
                style={{
                  margin: "0px 1rem",
                  minHeight: 400,
                }}
                className={styles.wwdServicesGlobal10Card}
              >
                <img
                  src={item?.img}
                  className={styles.wwdServicesGlobal10Img}
                />
                <div className={styles.wwdServicesGlobal10Text1}>
                  {item?.text1}
                </div>
                <div className={styles.wwdServicesGlobal10Text2}>
                  {item?.text2}
                </div>
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>

      {/* part 4 */}
      <RelatedReadingComp relatedReadingData={relatedReadingData} />

      {/* part 5 */}
      <Grid container className={`${styles.wwdServicesGlobal11Div}`}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={8}>
          <div className={styles.wwdServicesGlobal11Text}>
            {constantData?.part5Description}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          className={styles.wwdServicesGlobal11ButtonContainer}
        >
          <ButtonCustom
            title="Contact Us"
            icon={true}
            buttonStyles={styles.wwdServicesGlobal11Button}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
