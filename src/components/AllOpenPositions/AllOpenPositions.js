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
      {/* JSON-LD for job postings list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: jobsToShow.map((job, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${navconstants.jobsAndDetails}#${job.id}`,
              name: job.title,
            })),
          }),
        }}
      />

      <h2 id="open-positions-heading" className={styles.allOpenPositionsText}>
        We have {jobs?.length} open positions now!
      </h2>

      <div className={styles.allOpenPositionsOrangeline} />

      <Grid container className={styles.allOpenPositions1Container}>
        {/* Job Categories Sidebar */}
        <Grid
          item
          xs={12}
          md={3}
          component="aside"
          aria-label="Filter jobs by category"
        >
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
            We are always seeking talented people. If your desired position
            isn’t listed, please send us your LinkedIn profile. We'll get in
            touch.
          </p>

          <ButtonCustom
            title="Share your LinkedIn profile"
            ariaLabel="Share your LinkedIn profile with CodeKart"
          />
        </Grid>

        {/* Job Listings */}
        <Grid
          item
          xs={12}
          md={8.5}
          component="section"
          aria-label="List of open job positions"
        >
          {jobsToShow?.length > 0 ? (
            jobsToShow?.map((item, i) => (
              <article
                key={i}
                id={item.id}
                aria-label={`Job posting: ${item.title}`}
              >
                <JobDetailsCard item={item} />
              </article>
            ))
          ) : (
            <div className={styles.allOpenPositions3} role="alert">
              No Jobs Found
            </div>
          )}

          {/* Show More Link */}
          <Grid item display="flex" justifyContent="center" marginTop={5}>
            {numberOfJobsToShow > 0 && jobsToShow?.length > 0 && (
              <Link href={navconstants.jobsAndDetails} passHref legacyBehavior>
                <a aria-label="View all job listings">
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
