import React from "react";
import styles from "../../styles/Home/HomeComp5.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { GoArrowRight } from "react-icons/go";
import { homeComp5Data } from "./HomeConstantDatas";
import { navconstants } from "@/constants/navconstants";

export default function HomeComp5() {
  return (
    <Grid
      container
      className={`${styles.homeComp5Container} ${notosans.variable}`}
      style={{ position: "relative", overflow: "visible" }}
    >
      <h2 className={styles.homeComp5SmallText}>What We Do</h2>
      <h3 className={styles.homeComp5Header}>Industry</h3>
      <div className={styles.homeComp5Orangeline} />
      <p className={styles.homeComp5Text2}>
        Welcome to CodeKart, where we transform your digital dreams into reality
        <br />
        with our comprehensive range of services. Our team of experts is
        dedicated
        <br />
        to delivering innovative solutions that drive business success.
      </p>
      <Grid container className={styles.homeComp5CardContainer} gap={10}>
        {homeComp5Data?.map((item, i) => (
          <Grid item xs={5} md={4} lg={3} key={i}>
            <a
              target=""
              style={{ textDecoration: "none", color: "#000" }}
              href={`${navconstants.whatwedo}#${item?.text1.replace(
                / /g,
                "-"
              )}`}
              aria-label={`Explore industry: ${item?.text1}`}
            >
              <article className={styles.homeComp5Card}>
                {item?.text1}
                <div className={styles.arrowContainer}>
                  <GoArrowRight />
                </div>
              </article>
            </a>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
