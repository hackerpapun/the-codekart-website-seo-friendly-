import React from "react";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { Grid } from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import {
  whatWeDoComp2IndustryData,
} from "./WhatWeDoConstantData";
import { GoArrowRight } from "react-icons/go";
import Sticky from "react-stickynode";

export default function WhatWeDoComp3() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp2Container} ${notosans.variable}`}
      style={{ position: "relative", overflow: "visible" }}
    >
      <div className={styles.whatwedoCompSmallText}>What We Do</div>
      <div className={styles.whatwedoCompHeader}>Industry</div>
      <div className={styles.whatwedoCompOrangeline} />
      <div className={styles.whatwedoComp2Text2}>
        At CodeKart, we go beyond helping businesses transform through
        technology.
        <br /> We help them make a meaningful difference; to their customers,
        and to the <br />
        communities they serve.
      </div>
      <Sticky enabled={true} top={50} bottomBoundary={1200}>
        <Grid
          container
          className={styles.whatwedoComp2CardContainer}
          gap={10}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
            animation: "500ms ease-in-out 0s normal none 1 running fadeInDown",
          }}
        >
          {whatWeDoComp2IndustryData?.map((item, i) => (
            <Grid item xs={4} md={6} lg={3} key={i}>
              <a
                target=""
                style={{ textDecoration: "none", color: "#000" }}
                href={`#${item?.text1?.replace(/ /g, "-")}`}
              >
                <div className={styles.whatwedoComp2Card}>
                  {item?.text1}
                  <div className={styles.arrowContainer}>
                    <GoArrowRight className={styles.arrowIcon} />
                  </div>
                </div>
              </a>
            </Grid>
          ))}

          {/* services  */}
          <Grid container className={styles.whatwedoComp3IndustryDiv}>
            {whatWeDoComp2IndustryData?.map((item, i) => (
              <Grid
                container
                key={i}
                className={styles.whatwedoComp3IndustryDiv1}
                id={item?.text1?.replace(/ /g, "-")}
              >
                <Grid item xs={12} md={5} lg={5}>
                  <img
                    src={item?.img}
                    alt={item?.text1}
                    className={styles.whatwedoComp3IndustryDiv1Img}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  className={`${montserrat.variable} ${styles.whatwedoComp3IndustryDiv1Texts}`}
                >
                  <div className={styles.whatwedoComp3IndustryDiv1Text1}>
                    {" "}
                    {item?.text1}
                  </div>
                  <div className={styles.whatwedoComp3IndustryDiv1Text2}>
                    {" "}
                    {item?.text2}
                  </div>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Sticky>
    </Grid>
  );
}
