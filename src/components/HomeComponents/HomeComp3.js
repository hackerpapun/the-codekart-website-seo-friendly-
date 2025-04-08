import React from "react";
import styles from "../../styles/Home/HomeComp3.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { GoArrowRight } from "react-icons/go";
import { HomeComp3Data as homeComp3Data } from "./HomeConstantDatas";
import { navconstants } from "@/constants/navconstants";

export default function HomeComp3() {
  return (
    <Grid
      container
      className={`${styles.homeComp3Container} ${notosans.variable}`}
      style={{ position: "relative", overflow: "visible" }}
    >
      <p className={styles.homeComp3SmallText}>What We Do</p>
      <h2 className={styles.homeComp3Header}>Our Service</h2>
      <div className={styles.homeComp3Orangeline} />
      <p className={styles.homeComp3Text2}>
        Welcome to CodeKart, where we transform your digital dreams into reality
        <br />
        with our comprehensive range of services. Our team of experts is
        dedicated
        <br />
        to delivering innovative solutions that drive business success.
      </p>
      <Grid container className={styles.homeComp3CardContainer} gap={10}>
        {homeComp3Data?.map((item, i) => (
          <Grid item xs={5} md={4} lg={3} key={i}>
            <a
              href={`${navconstants.whatwedo}#${item?.text1?.replace(
                /[\s\n]+/g,
                "-"
              )}`}
              style={{ textDecoration: "none", color: "#000" }}
              aria-label={`Explore ${item.text1} services`}
            >
              <div className={styles.homeComp3Card}>
                {item?.text1}
                <div className={styles.arrowContainer}>
                  <GoArrowRight />
                </div>
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
