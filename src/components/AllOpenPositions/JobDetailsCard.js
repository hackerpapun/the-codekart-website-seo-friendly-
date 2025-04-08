import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/AllOpenPositionsStyles/jobDetailsCard.module.css";
import ButtonCustom from "../ButtonCustom";

export default function JobDetailsCard({ item }) {
  return (
    <Grid
      container
      bgcolor="#fff"
      marginBottom={2}
      borderRadius={2}
      padding={3}
      component="article"
      itemScope
      itemType="https://schema.org/JobPosting"
    >
      <Grid item xs={12}>
        <h3 className={styles.jobDetailsCard1} itemProp="title">
          {item?.title}
        </h3>
        <div className={styles.jobDetailsCard2}>
          <div className={styles.jobDetailsCard2Text} itemProp="industry">
            {item?.category}
          </div>
          <div className={styles.jobDetailsCard2Text} itemProp="employmentType">
            {item?.type}
          </div>
        </div>
        <p className={styles.jobDetailsCard3} itemProp="description">
          {item?.description}
        </p>
        <Grid item display="flex" justifyContent="flex-end" marginTop={4}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/codekart/jobs/",
                "_blank"
              )
            }
            role="link"
            aria-label={`View job details for ${item?.title} on LinkedIn`}
          >
            <ButtonCustom
              title="View Details"
              icon={true}
              buttonStyles={styles.jobDetailsCard4}
            />
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}
