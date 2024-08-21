import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import { notosans } from "@/assets/fonts/fonts";
import Image from "next/image";

const cardData = [
  {
    img: "/images/insights/insightcard1.png",
    title: "Company Values",
    description:
      "Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.",
  },
  {
    img: "/images/insights/insightcard2.png",
    title: "Friendly atmosphere",
    description:
      "We hold a positive attitude in order to foster respect and decency for our entire team.",
  },
  {
    img: "/images/insights/insightcard3.png",
    title: "Work-life balance",
    description:
      "For us, a healthy personal life is just as important as the time you spend in the office.",
  },
  {
    img: "/images/insights/insightcard4.png",
    title: "Everyday grow",
    description:
      "We provide the necessary support to ensure your skills never stop growing. ",
  },
];

export default function InsightsComp2() {
  return (
    <Grid
      container
      className={`${styles.insightComp2Container} ${notosans.variable}`}
    >
      <div className={styles.insightsComp2whatmakeText}>
        What make CodeKart a great
        <br />
        place to work?
      </div>
      <div className={styles.insightsCompOrangeline} />
      <Grid container className={styles.insightsComp2CardContainer}>
        {cardData?.map((item, i) => (
          <Grid item xs={12} md={6} lg={2} key={i}>
            <div className={`${styles.insightsComp2Card}`}>
                <Image
                  src={item?.img} // Replace with your image path
                  alt="Description of image"
                  layout="responsive"
                  width={700} // Provide the width of the image
                  height={475} // Provide the height of the image
                />
              <div className={styles.insightsComp2CardTitle}>{item?.title}</div>
              <div className={styles.insightsComp2CardDescription}>
                {item?.description}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
