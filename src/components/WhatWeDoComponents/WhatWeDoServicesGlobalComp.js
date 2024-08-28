import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/WhatWeDoStyles/whatWeDoServicesGlobalComp.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import ButtonCustom from "../ButtonCustom";

const cardData = [
  {
    text1: "Dedicated Development Teams",
    text2:
      "Access specialized talent for your development projects, ensuring quality and efficiency.",
  },
  {
    text1: "Remote IT Staffing",
    text2:
      "Hire experienced IT professionals to support your operations from anywhere in the world.",
  },
  {
    text1: "Project-Based Outsourcing",
    text2:
      "Scale your workforce based on project needs without the overhead of permanent hires.",
  },
];

export default function WhatWeDoServicesGlobalComp() {
  return (
    <Box className={`${notosans.variable} ${montserrat.variable}`}>
      {/* image bg part 1 */}
      <Grid container className={`${styles.wwdServicesGlobal1}`}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={9}>
          <div className={styles.wwdServicesGlobal2}>
            Service / Resource Outsourcing
          </div>
          <div className={styles.wwdServicesGlobal3}>
            Your Vision, Our Talent --
          </div>
          <div className={styles.wwdServicesGlobal3}>Empower The Team.</div>
          <div className={styles.wwdServicesGlobal4}>
            Let's talk
            <span className={styles.arrowContainer}>
              <FaCircleArrowRight />
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>

      {/* part 2 */}
      <Grid container className={styles.wwdServicesGlobal5} spacing={10}>
        <Grid item xs={12} lg={1}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <div className={styles.wwdServicesOrangeline} />
          <div className={styles.wwdServicesGlobal6}>
            Optimize your operations with Codekart's resource outsourcing
            services. We provide skilled professionals and dedicated teams to
            support your projects and enhance your business capabilities.
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          className={styles.wwdServicesGlobal6Container}
        >
          <img
            src="/images/whatwedo/AI_1.svg"
            className={styles.wwdServicesGlobal7}
          />
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>

      {/* part 3 */}
      <Grid container className={styles.wwdServicesGlobal8}>
        <Grid item xs={12} lg={1}></Grid>
        <Grid item xs={12} md={10}>
          <div className={styles.wwdServicesGlobal9}>
            Most Desired Outcomes from the Resource Outsourcing
          </div>
          <Grid container gap={5}>
            {cardData?.map((item, i) => (
              <Grid item xs={12} md={6} lg={3.7}>
                <div className={styles.wwdServicesGlobal10Card}>
                  <img
                    src="/images/whatwedo/AI_2.svg"
                    className={styles.wwdServicesGlobal10Img}
                  />
                  <div className={styles.wwdServicesGlobal10Text1}>
                    {item?.text1}
                  </div>
                  <div className={styles.wwdServicesGlobal10Text2}>
                    {item?.text2}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={1}></Grid>
      </Grid>

      {/* part 4 */}
      {/* <Grid
        container
        className={`${styles.wwdServicesGlobal1} ${notosans.variable} ${montserrat.variable}`}
      >
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={9}>
          <div className={styles.wwdServicesGlobal2}>Service / Resource Outsourcing</div>
          <div className={styles.wwdServicesGlobal3}>Your Vision, Our Talent --</div>
          <div className={styles.wwdServicesGlobal3}>Empower The Team.</div>
          <div className={styles.wwdServicesGlobal4}>
            Let's talk
            <span className={styles.arrowContainer}>
              <FaCircleArrowRight />
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid> */}

      {/* part 5 */}
      <Grid container className={`${styles.wwdServicesGlobal11Div}`}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={8}>
          <div className={styles.wwdServicesGlobal11Text}>
            Our resource outsourcing solutions help you focus on core business
            activities while we handle the specialized tasks, providing
            flexibility and expertise.
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          className={styles.wwdServicesGlobal11ButtonContainer}
        >
          <ButtonCustom
            title="Contact Us"
            icon={true}
            buttonStyles={styles.wwdServicesGlobal11Button}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
