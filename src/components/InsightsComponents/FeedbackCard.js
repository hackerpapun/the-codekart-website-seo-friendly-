import React from "react";
import styles from "../../styles/InsightsStyles/feedbackCard.module.css";

export default function FeedbackCard({ key, item }) {
  console.log("item", item);
  return (
    <div key={key} id={styles.feedbackCard1}>
      <div id={styles.feedbackCard3}>
        {item?.pic ? (
          <img src={item?.pic} id={styles.feedbackCard4} />
        ) : (
          <div id={styles.feedbackCard4}>{item?.name?.charAt(0)?.toUpperCase()}</div>
        )}
        <div>
          <div id={styles.feedbackCard2} style={{ margin: 0 }}>
            {item?.name || "N/A"}
          </div>
          <div id={styles.feedbackCard5}>{item?.designation || "N/A"}</div>
        </div>
      </div>
      <div id={styles.feedbackCard6}>
        {item?.feedback?.length > 300
          ? `${item?.feedback?.substring(0, 300)}...`
          : item?.feedback}
      </div>
    </div>
  );
}
