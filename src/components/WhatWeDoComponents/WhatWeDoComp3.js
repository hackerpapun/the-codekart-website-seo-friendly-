import React from "react";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { Grid, Typography } from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { whatWeDoComp2IndustryData } from "./WhatWeDoConstantData";
import { GoArrowRight } from "react-icons/go";
import Sticky from "react-stickynode";

// Converts titles into safe URL slugs
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-");

export default function WhatWeDoComp3() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp2Container} ${notosans.variable}`}
    >
      <Typography className={styles.whatwedoCompSmallText}>
        What We Do
      </Typography>

      <Typography className={styles.whatwedoCompHeader}>Industry</Typography>

      <div className={styles.whatwedoCompOrangeline} />

      <Typography className={styles.whatwedoComp2Text2}>
        At CodeKart, we go beyond helping businesses transform through
        technology.
        <br />
        We help them make a meaningful difference; to their customers, and to
        the <br />
        communities they serve.
      </Typography>

      <Sticky enabled={true} top={50} bottomBoundary={1200}>
        <Grid container className={styles.whatwedoComp2CardContainer} gap={4}>
          {whatWeDoComp2IndustryData?.map((item, i) => {
            const id = slugify(item?.text1);
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <a
                  href={`#${id}`}
                  aria-label={`Navigate to ${item.text1}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className={styles.whatwedoComp2Card}>
                    {item?.text1}
                    <div className={styles.arrowContainer}>
                      <GoArrowRight className={styles.arrowIcon} />
                    </div>
                  </div>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Sticky>

      {/* Services Section */}
      <Grid container className={styles.whatwedoComp3IndustryDiv}>
        {whatWeDoComp2IndustryData?.map((item, i) => {
          const id = slugify(item?.text1);
          return (
            <Grid
              container
              key={i}
              id={id}
              className={styles.whatwedoComp3IndustryDiv1Container}
            >
              <Grid
                item
                xs={12}
                md={5}
                lg={5}
                className={styles.whatwedoComp3IndustryDiv1}
              >
                <img
                  src={item?.img}
                  alt={item?.text1}
                  className={styles.whatwedoComp3IndustryDiv1Img}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                className={`${montserrat.variable} ${styles.whatwedoComp3IndustryDiv1Texts}`}
              >
                <Typography
                  variant="h5"
                  className={styles.whatwedoComp3IndustryDiv1Text1}
                >
                  {item?.text1}
                </Typography>
                <Typography className={styles.whatwedoComp3IndustryDiv1Text2}>
                  {item?.text2}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
