import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
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
  const isMobile = useMediaQuery("(max-width:798px)");

  return (
    <Grid
      container
      component="section"
      className={`${styles.insightsComp4Container} ${notosans.variable}`}
      aria-label="Life at CodeKart Gallery"
    >
      <div>
        <h2 className={styles.insightsComp4Text}>
          Take a peek at what goes on at CodeKart!
        </h2>
        <div
          className={styles.insightsCompOrangeline}
          style={{ width: 200 }}
          aria-hidden="true"
        />
      </div>

      <Grid
        container
        className={styles.insightsComp4CardContainer}
        component="div"
        role="region"
        aria-label="Photo gallery grid"
      >
        <Grid item xs={12} lg={1} aria-hidden="true" />
        <Grid item xs={12} lg={10}>
          <ImageList
            variant="quilted"
            cols={isMobile ? 2 : 12}
            rowHeight={isMobile ? 100 : 121}
          >
            {insightsComp4Data?.map((item) => (
              <ImageListItem
                key={item.img}
                cols={isMobile ? 1 : item.cols || 11}
                rows={isMobile ? 1 : item.rows || 11}
              >
                <img
                  {...srcset(
                    item.img,
                    isMobile ? 100 : 121,
                    item.rows,
                    item.cols
                  )}
                  alt={item.title || "Office Life at CodeKart"}
                  loading="lazy"
                  className={styles.insightsComp4Img}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} lg={1} aria-hidden="true" />
      </Grid>
    </Grid>
  );
}
