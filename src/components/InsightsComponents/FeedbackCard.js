import React from "react";
import styles from "../../styles/InsightsStyles/feedbackCard.module.css";

export default function FeedbackCard({ item }) {
  return (
    <div id={styles.feedbackCard1}>
      <div id={styles.feedbackCard3}>
        {item?.pic ? (
          <img
            src={item?.pic}
            alt={item?.name ? `${item.name}'s photo` : "User photo"}
            id={styles.feedbackCard4}
            loading="lazy"
          />
        ) : (
          <div id={styles.feedbackCard4} aria-label="User Initial">
            {item?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}
        <div>
          <div id={styles.feedbackCard2} style={{ margin: 0 }}>
            {item?.name || "Unknown User"}
          </div>
          <div id={styles.feedbackCard5}>{item?.designation || "User"}</div>
        </div>
      </div>

      <div id={styles.feedbackCard6}>
        {item?.feedback?.length > 300
          ? `${item.feedback.substring(0, 300)}...`
          : item?.feedback || "No feedback available."}
      </div>
    </div>
  );
}
