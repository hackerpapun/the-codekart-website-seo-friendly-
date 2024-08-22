import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { insightsComp4Data } from "./InsightsConstantDatas";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function InsightsComp4() {
  const isMobile = useMediaQuery('(max-width:798px)');
  return (
    <Grid
      container
      className={`${styles.insightsComp4Container} ${notosans.variable}`}
    >
      <div>
        <div className={styles.insightsComp4Text}>
          Take a peek at what goes on at CodeKart!
        </div>
        <div className={styles.insightsCompOrangeline} style={{ width: 200 }} />
      </div>
      <Grid container className={styles.insightsComp4CardContainer}>
        <Grid item xs={12} lg={1} />
        <Grid item xs={12} lg={10}>
        <ImageList
      variant="quilted"
      cols={isMobile ? 2 : 12} // Adjust the number of columns for mobile
      rowHeight={isMobile ? 100 : 121} // Adjust the row height for mobile
    >
      {insightsComp4Data?.map((item) => (
        <ImageListItem
          key={item.img}
          cols={isMobile ? 1 : item.cols || 11} // Adjust the columns for individual items
          rows={isMobile ? 1 : item.rows || 11} // Adjust the rows for individual items
        >
          <img
            {...srcset(item.img, isMobile ? 100 : 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            className={styles.insightsComp4Img}
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Grid>
        <Grid item xs={12} lg={1} />
      </Grid>
    </Grid>
  );
}
