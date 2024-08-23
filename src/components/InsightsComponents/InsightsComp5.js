import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { insightsComp5FeedbackData, insightsComp5LinksData } from "./InsightsConstantDatas";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackCard from "./FeedbackCard";

export default function InsightsComp5() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Grid
      container
      className={`${styles.insightsComp5Container} ${notosans.variable}`}
    >
      <Grid item xs={12} lg={1} />
      <Grid item xs={12} lg={10}>
        {/* stay connected */}
        <div className={styles.insightsComp5Container} style={{ padding: 0 }}>
          <div className={styles.insightsComp5Text1}>Stay Connected</div>
          <div className={styles.insightsCompOrangeline} />
          <div className={styles.insightsComp5Text2}>
            Follow us on social media to stay updated with the latest news,
            updates, and innovations from CodeKart
          </div>
        </div>

        {/* facebook, instagram, linkedin , twitter */}
        <Grid container className={styles.insightsComp5CardContainer}>
          {insightsComp5LinksData?.map((item, i) => {
            return (
              <Grid item xs={6} md={6} lg={3} style={{ gap: 10 }}>
                <div
                  className={styles.insightsComp5Card}
                  item={i}
                  onClick={() => window.open(item?.url, "_blank")}
                >
                  <img src={item?.img} width={40} height={40} />
                  <div>
                    <div className={styles.insightsComp5CardTitle}>
                      Codekart
                    </div>
                    <div className={styles.insightsComp5CardTitle}>
                      {item?.title}
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>

        {/* employee feedback */}
        <Grid container>
          <div className={styles.insightsComp5Text3}>
            Employee
            <span className={styles.insightsComp5Text4}> Feedback</span>
          </div>
         <div className={styles.insightsComp5Text5}>At CodeKart, we value the voices of our team members. Here’s what some of our employees have to say about working with us:</div>
        </Grid>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          partialVisible
          // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {insightsComp5FeedbackData?.map((item, i) => (
            <FeedbackCard item={item} key={i} />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12} lg={1} />
    </Grid>
  );
}
