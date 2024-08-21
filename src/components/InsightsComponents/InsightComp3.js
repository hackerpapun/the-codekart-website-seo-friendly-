import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const cardData = [
  {
    img: "/images/insights/clock.svg",
    title: "Flexible working hours",
  },
  {
    img: "/images/insights/policy.svg",
    title: "Health care Insurance",
  },
  {
    img: "/images/insights/confetti.svg",
    title: "Fun team events",
  },
  {
    img: "/images/insights/rocket.svg",
    title: "Perfessional grow budget",
  },
  {
    img: "/images/insights/wallet.svg",
    title: "Competitive salary",
  },
  {
    img: "/images/insights/specs.svg",
    title: "Compensation for eyeglasses",
  },
  {
    img: "/images/insights/graduationCap.svg",
    title: "Allowance for first-graders",
  },
];

export default function InsightsComp3() {
  return (
    <Grid
      container
      className={`${styles.insightComp3Container} ${notosans.variable}`}
    >
      <div className={styles.insightsComp3Text1}>
        What benefits are waiting for you?
      </div>
      <div className={styles.insightsCompOrangeline} />
      <div className={styles.insightsComp3Text2}>
        At CodeKart, we offer a variety of hand-picked benefits that you can
        take advantage of! Join us to experience a rewarding and supportive work
        environment.
      </div>
      <Grid container className={styles.insightsComp3CardContainer}>
        <Marquee pauseOnHover gradient speed={30}>
          {cardData?.map((item, i) => (
              <div className={styles.insightsComp3Card} item={i}>
                <Image
                  src={item?.img} // Replace with your image path
                  alt="Description of image"
                  width={35}
                  height={35}
                />
                <div className={styles.insightsComp3CardTitle}>
                  {item?.title}
                </div>
              </div>
          ))}
        </Marquee>
      </Grid>
    </Grid>
  );
}
