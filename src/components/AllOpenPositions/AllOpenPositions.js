import React, { useState } from "react";
import styles from "../../styles/AllOpenPositionsStyles/allOpenPositions.module.css";
import { Grid, useMediaQuery } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { jobCategories, jobs } from "./AllOpenPositionsConstantData";
import ButtonCustom from "../ButtonCustom";
import JobDetailsCard from "./JobDetailsCard";
import Link from "next/link";
import { navconstants } from "@/constants/navconstants";

export default function AllOpenPositions({ numberOfJobsToShow }) {
  const isMobile = useMediaQuery("(max-width:798px)");
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
    <section
      id="allOpenPositions"
      className={`${styles.allOpenPositionsContainer} ${notosans.variable}`}
      aria-labelledby="open-positions-heading"
    >
      <h2 id="open-positions-heading" className={styles.allOpenPositionsText}>
        We have {jobs?.length} open positions now!
      </h2>

      <div className={styles.allOpenPositionsOrangeline} />

      <Grid container className={styles.allOpenPositions1Container}>
        {/* Job Categories */}
        <Grid item xs={12} md={3} component="nav" aria-label="Job Categories">
          <div
            className={
              selectedCategory?.includes("all")
                ? styles.allOpenPositions1Selected
                : styles.allOpenPositions1
            }
            onClick={() => {
              if (!selectedCategory?.includes("all")) {
                onChangeSelectedCategory("all");
              }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={selectedCategory === "all"}
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
                  if (!categorySelected) {
                    onChangeSelectedCategory(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={categorySelected}
              >
                {item}{" "}
                {categorySelected && (
                  <span>({jobsAccordingToSelectedCategory?.length})</span>
                )}
              </div>
            );
          })}

          <p className={styles.allOpenPositions2}>
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.
          </p>

          <ButtonCustom
            title="Share your LinkedIn profile"
            ariaLabel="Share your LinkedIn profile with us"
          />
        </Grid>

        {/* Job Details */}
        <Grid
          item
          xs={12}
          md={8.5}
          component="section"
          aria-label="Open Job Listings"
        >
          {jobsToShow?.length > 0 ? (
            jobsToShow?.map((item, i) => (
              <article key={i}>
                <JobDetailsCard item={item} />
              </article>
            ))
          ) : (
            <div className={styles.allOpenPositions3}>No Jobs Found</div>
          )}

          {/* Link to all jobs */}
          <Grid item display="flex" justifyContent="center" marginTop={5}>
            {numberOfJobsToShow > 0 && jobsToShow?.length > 0 && (
              <Link href={navconstants.jobsAndDetails} passHref legacyBehavior>
                <a aria-label="Show all open job positions">
                  <ButtonCustom title="Show More..." />
                </a>
              </Link>
            )}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
