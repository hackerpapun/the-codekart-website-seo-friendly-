import React from "react";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { Grid } from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { whatWeDoComp2ServicesData } from "./WhatWeDoConstantData";
import { GoArrowRight } from "react-icons/go";
import Sticky from "react-stickynode";

export default function WhatWeDoComp2() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp2Container} ${notosans.variable}`}
      style={{ position: "relative", overflow: "visible" }}
    >
      <div className={styles.whatwedoCompSmallText}>What We Do</div>
      <div className={styles.whatwedoCompHeader}>Our Service</div>
      <div className={styles.whatwedoCompOrangeline} />
      <div className={styles.whatwedoComp2Text2}>
        Welcome to CodeKart, where we transform your digital dreams into reality
        <br />
        with our comprehensive range of services. Our team of experts is
        dedicated
        <br />
        to delivering innovative solutions that drive business success.
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
          {whatWeDoComp2ServicesData?.map((item, i) => (
            <Grid item xs={5} md={4} lg={3} key={i}>
              <a
                target=""
                style={{ textDecoration: "none", color: "#000" }}
                href={`#${item?.text1.replace(/ /g, "-")}`}
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
          <Grid container className={styles.whatwedoComp2ServicesDiv}>
            {whatWeDoComp2ServicesData?.map((item, i) => (
              <Grid
                container
                key={i}
                className={styles.whatwedoComp2ServicesDiv1Container}
                id={item?.text1.replace(/ /g, "-")}
              >
                <Grid item xs={12} md={5} lg={5} className={styles.whatwedoComp2ServicesDiv1}>
                  <img
                    src={item?.img}
                    alt={item?.text1}
                    className={styles.whatwedoComp2ServicesDiv1Img}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  className={`${montserrat.variable} ${styles.whatwedoComp2ServicesDiv1Texts}`}
                >
                  <div className={styles.whatwedoComp2ServicesDiv1Text1}>
                    {" "}
                    {item?.text1}
                  </div>
                  <div className={styles.whatwedoComp2ServicesDiv1Text2}>
                    {" "}
                    {item?.text2}
                  </div>
                  <div className={styles.whatwedoComp2ServicesDiv1Text3}>
                    {" "}
                    {item?.text3}
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
