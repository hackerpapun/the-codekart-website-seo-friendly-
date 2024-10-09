import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhatWeDoStyles/whatWeDoServicesGlobalComp.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import ButtonCustom from "../ButtonCustom";
import RelatedReadingComp from "../RelatedReadingComp/RelatedReadingComp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { navconstants } from "@/constants/navconstants";
import { useRouter } from "next/router";

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
  const Router = useRouter();

  return (
    <Box className={`${notosans.variable} ${montserrat.variable}`}>
      {/* image bg part 1 */}
      <div
        className={
          constantData?.bgImage
            ? styles.wwdServicesGlobal1MainContainerImage
            : styles.wwdServicesGlobal1MainContainerVideo
        }
      >
        {
          constantData?.bgVideo ? (
            <video
              src={constantData?.bgVideo}
              autoPlay
              muted
              loop
              preload="none"
              className={styles.wwdServicesGlobal1ContainerVideo}
            />
          ) : null
          
        }
        { constantData?.healthBg && <img
             src={constantData?.healthBg}
             alt="Bg Image"
             className={styles.wwdServicesGlobal1ContainerImage}
           />}
        <Grid
          container
          className={
            constantData?.bgVideo
              ? styles.wwdServicesGlobal1Video
              : styles.wwdServicesGlobal1Image
          }
          style={{
            backgroundImage: constantData?.bgImage
              ? `url(${constantData?.bgImage})`
              : "",
          }}
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
              Let&apos;s talk
              <span className={styles.arrowContainer}>
                <FaCircleArrowRight size={35} />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
      </div>

      {/* part 2 */}
      <Grid container className={styles.wwdServicesGlobal5}>
        <Grid item xs={12} lg={0.5}></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <div className={styles.wwdServicesOrangeline} />
          <div className={styles.wwdServicesGlobal6}>
            {constantData?.part2Description}
          </div>
        </Grid>
        <Grid item xs={12} sm={0.5} lg={1}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <img
            src={constantData?.part2Img}
            className={styles.wwdServicesGlobal7}
          />
        </Grid>
        <Grid item xs={12} lg={0.5}></Grid>
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
            onClick={() => Router.push(`${navconstants.whoweare}#contactus`)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
