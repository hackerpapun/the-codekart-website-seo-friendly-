"use client";
import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/RelatedReadingComp/RelatedReadingComp.module.css";
import { montserrat, notosans } from "@/assets/fonts/fonts";

export default function HomeComp4({ relatedReadingData }) {
  return (
    <Grid
      container
      className={`${styles.rrc1} ${notosans.variable} ${montserrat.variable}`}
    >
      <Grid item xs={12}>
        <h2 className={styles.rrc2}>Blog Posts</h2>
        <p className={styles.rrc3}>
          Our young team has what it takes to
          <br />
          tackle any creative task
        </p>
        <div className={styles.whatwedoCompOrangeline} />

        <Grid
          container
          marginTop={10}
          display="flex"
          justifyContent="space-evenly"
        >
          {relatedReadingData?.length > 0 ? (
            relatedReadingData.map((item, i) => (
              <Grid item xs={12} md={5.5} lg={2.6} key={i}>
                <article className={styles.rrc4Card}>
                  <div className={styles.rrc4CardImgContainer}>
                    <img
                      src={item?.img}
                      alt={item?.title}
                      className={styles.rrc4CardImg}
                      loading="lazy"
                    />
                    <span
                      className={styles.rrc4CardType}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#FFEA60" : "#FA6400",
                      }}
                    >
                      {item?.type}
                    </span>
                  </div>
                  <h3 className={styles.rrc4CardTitle}>{item?.title}</h3>
                  <time className={styles.rrc4CardDate} dateTime={item?.date}>
                    {item?.date}
                  </time>
                </article>
              </Grid>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </Grid>

        <div className={styles.rrc4}></div>
      </Grid>
    </Grid>
  );
}
