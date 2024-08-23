import React, { useState } from "react";
import styles from "../../styles/allOpenPositions.module.css";
import { Grid, useMediaQuery } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { jobCategories, jobs } from "./AllOpenPositionsConstantData";
import ButtonCustom from "../ButtonCustom";
import JobDetailsCard from "./JobDetailsCard";
import { useRouter } from "next/router";
import { navconstants } from "@/constants/navconstants";

export default function AllOpenPositions({ numberOfJobsToShow }) {

  const Router = useRouter();
  const isMobile = useMediaQuery('(max-width:798px)');

  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobsAccordingToSelectedCategory =
    jobs?.length > 0
      ? selectedCategory !== "all"
        ? jobs?.filter((item) => item?.category?.includes(selectedCategory))
        : jobs
      : [];

  const jobsToShow =
    numberOfJobsToShow > 0
      ? jobsAccordingToSelectedCategory?.slice(0, numberOfJobsToShow)
      : jobsAccordingToSelectedCategory;

  const onChangeSelectedCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <Grid
      container
      className={`${styles.allOpenPositionsContainer} ${notosans.variable}`}
    >
      <div className={styles.allOpenPositionsText}>
        We have {jobs?.length} open positions now!
      </div>
      <div className={styles.allOpenPositionsOrangeline} />
      <Grid container className={styles.allOpenPositions1Container}>
        {/* job categories */}
        <Grid item xs={12} md={3} >
          <div
            className={
              selectedCategory?.includes("all")
                ? styles.allOpenPositions1Selected
                : styles.allOpenPositions1
            }
            onClick={() => {
              if (selectedCategory?.includes("all")) {
                return;
              } else {
                onChangeSelectedCategory("all");
              }
            }}
          >
            All Open Positions ({jobs?.length})
          </div>
          {jobCategories?.map((item, i) => {
            const categorySelected = item?.includes(selectedCategory);
            return (
              <div
                key={i}
                className={
                  categorySelected
                    ? styles.allOpenPositions1Selected
                    : styles.allOpenPositions1
                }
                onClick={() => {
                  if (categorySelected) {
                    return;
                  } else {
                    onChangeSelectedCategory(item);
                  }
                }}
              >
                {item}{" "}
                {categorySelected && (
                  <span>({jobsAccordingToSelectedCategory?.length})</span>
                )}
              </div>
            );
          })}
          <div className={styles.allOpenPositions2}>
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.
          </div>
          <ButtonCustom title="Share your LinkedIn profile" />
        </Grid>
        {/* job details */}
        <Grid item xs={12} md={8.5}>
          {jobsToShow?.length > 0 ? (
            jobsToShow?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <JobDetailsCard item={item} />
                </React.Fragment>
              );
            })
          ) : (
            <div className={styles.allOpenPositions3}>No Jobs Found</div>
          )}
          <Grid item display="flex" justifyContent="center" marginTop={5}>
            {numberOfJobsToShow > 0 && jobsToShow?.length > 0 && (
              <ButtonCustom title="Show More..." onClick={() => Router.push(navconstants.jobsAndDetails)} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
