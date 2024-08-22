import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/jobDetailsCard.module.css";
import ButtonCustom from "../ButtonCustom";

export default function JobDetailsCard({ item }) {
  return (
    <Grid
      container
      bgcolor="#fff"
      marginBottom={2}
      borderRadius={2}
      padding={3}
    >
      <Grid item xs={12}>
        <div className={styles.jobDetailsCard1}>{item?.title}</div>
        <div className={styles.jobDetailsCard2}>
          <div className={styles.jobDetailsCard2Text}>{item?.category}</div>
          <div className={styles.jobDetailsCard2Text}>{item?.type}</div>
        </div>
        <div className={styles.jobDetailsCard3}>{item?.description}</div>
        <Grid item display="flex" justifyContent="flex-end" marginTop={4}>
          <ButtonCustom title="View Details" icon={true} buttonStyles={styles.jobDetailsCard4} />
        </Grid>
      </Grid>
    </Grid>
  );
}
