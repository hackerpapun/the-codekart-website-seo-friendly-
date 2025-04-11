import React from "react";
import { stayConnectedData } from "./StayConnectedData";
import styles from "../../styles/StayConnectedComp/stayConnectedComp.module.css";
import { Grid } from "@mui/material";

export default function StayConnectedComp() {
  return (
    <>
      <section
        className={styles.stayConnectedCompContainer}
        style={{ padding: 0 }}
        aria-labelledby="stay-connected-heading"
      >
        <h2
          id="stay-connected-heading"
          className={styles.stayConnectedCompText1}
        >
          Stay Connected
        </h2>
        <div className={styles.insightsCompOrangeline} role="presentation" />
        <p className={styles.stayConnectedCompText2}>
          Follow us on social media to stay updated with the latest news,
          updates, and innovations from CodeKart
        </p>
      </section>

      {/* facebook, instagram, linkedin , twitter */}
      <Grid
        container
        className={styles.stayConnectedCompCardContainer}
        component="ul"
        aria-label="Social media links"
      >
        {stayConnectedData?.map((item, i) => (
          <Grid
            key={i}
            item
            xs={6}
            md={6}
            lg={3}
            style={{ gap: 10 }}
            component="li"
          >
            <button
              className={styles.stayConnectedCompCard}
              aria-label={`Visit Codekart on ${item?.title}`}
              onClick={() => window.open(item?.url, "_blank")}
              style={{ all: "unset", cursor: "pointer" }}
            >
              <img
                src={item?.img}
                width={40}
                height={40}
                alt={`${item?.title} icon`}
              />
              <div>
                <div className={styles.stayConnectedCompCardTitle}>
                  Codekart
                </div>
                <div className={styles.stayConnectedCompCardTitle}>
                  {item?.title}
                </div>
              </div>
            </button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
