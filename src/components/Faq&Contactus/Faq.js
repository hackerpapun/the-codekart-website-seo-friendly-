import React from "react";
import styles from "../../styles/Faq/faq.module.css";
import { Grid } from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What services does CodeKart offer?",
    answer:
      "We offer a wide range of services including custom software development, mobile app development, ...",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can get in touch with our sales team via email at sales@codekart.com or call us at +123-456-....",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "The timeline for a project depends on its complexity and requirements. After an initial ....",
  },
  {
    question: "How does CodeKart ensure the quality of its solutions?",
    answer:
      "We adhere to the highest standards of quality through rigorous testing and quality assurance pro...",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support services to ensure your software and ....",
  },
  {
    question: "Can CodeKart help with digital transformation?",
    answer:
      "Absolutely! We guide businesses through their digital transformation journey, providing ....",
  },
];

function Faq() {
  return (
    <Grid container spacing={3}>
      <Grid item md={1}></Grid>

      <Grid item xs={10}>
        <Container maxWidth={false} className={styles.faqContainer}>
          <Box mt={4}>
            <Box mb={5}>
              <div className={styles.faqHeader}>
                Frequently Asked Questions (Faq)
              </div>
              <div className={styles.faqHeaderOrangeLine} />
            </Box>
            {faqData.map((faq, index) => (
              <Accordion key={index} className={styles.accordion}>
                <AccordionSummary
                  expandIcon={
                    <Box className={styles.iconContainer}>
                      <ExpandMoreIcon className={styles.customIcon} />
                    </Box>
                  }
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <Typography className={styles.questionText}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.answerText}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}

export default Faq;
