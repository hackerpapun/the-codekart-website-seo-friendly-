import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import {
  insightsComp5FeedbackData,
  insightsComp5LinksData,
} from "./InsightsConstantDatas";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackCard from "./FeedbackCard";
import StayConnectedComp from "../StayConnectedComp/StayConnectedComp";

export default function InsightsComp5() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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

  return (
    <Grid
      container
      component="section"
      className={`${styles.insightsComp5Container} ${notosans.variable}`}
      aria-label="Employee Feedback and Connection Section"
    >
      <Grid item xs={12} lg={1} aria-hidden="true" />
      <Grid item xs={12} lg={10}>
        {/* Stay Connected */}
        <StayConnectedComp />

        {/* Employee Feedback Section */}
        <Grid container component="article" aria-label="Employee Feedback">
          <h2 className={styles.insightsComp5Text3}>
            Employee <span className={styles.insightsComp5Text4}>Feedback</span>
          </h2>
          <p className={styles.insightsComp5Text5}>
            At CodeKart, we value the voices of our team members. Here’s what
            some of our employees have to say about working with us:
          </p>
        </Grid>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          partialVisible
          aria-label="Employee testimonials carousel"
        >
          {insightsComp5FeedbackData?.map((item, i) => (
            <FeedbackCard item={item} key={i} />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12} lg={1} aria-hidden="true" />
    </Grid>
  );
}
