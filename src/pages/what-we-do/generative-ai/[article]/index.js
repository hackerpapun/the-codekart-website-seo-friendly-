// pages/index.js
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  Grid,
  TextField,
  Button,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "../../../../styles/WhatWeDoStyles/articleStyle.module.css";

import { notosans } from "@/assets/fonts/fonts";
import ButtonCustom from "@/components/ButtonCustom";
import RelatedReadingComp from "@/components/RelatedReadingComp/RelatedReadingComp";
import { getPublicImageUrl } from "@/constants/images";

// Mock related readings
const relatedReadingData = [
  {
    type: "Resource",
    title: "Over Ride The Digital Design With Additional",
    img: getPublicImageUrl("/images/whatwedo/relatedReading1.svg"),
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Free consultation with experts",
    img: getPublicImageUrl("/images/whatwedo/relatedReading2.svg"),
    date: "August 10, 2024",
  },
  {
    type: "Resource",
    title: "Quality Design projects completed",
    img: getPublicImageUrl("/images/whatwedo/relatedReading3.svg"),
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Task completion planning with timelines",
    img: getPublicImageUrl("/images/whatwedo/relatedReading4.svg"),
    date: "August 10, 2024",
  },
];

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>How Generative AI is Transforming Tech | CodeKart</title>
        <meta
          name="description"
          content="Discover how Generative AI is reshaping industries by automating content creation, enhancing creativity, and driving tech innovation at CodeKart."
        />
        <meta
          name="keywords"
          content="Generative AI, Artificial Intelligence, AI in Tech, AI Innovation, AI Content Creation, CodeKart"
        />
      </Head>

      <Container maxWidth="md" className={notosans.variable}>
        {/* Category Tag */}
        <Box mt={4} mb={2}>
          <Chip
            label="AI & ML"
            color="primary"
            style={{ fontWeight: "bold" }}
          />
        </Box>

        {/* Title */}
        <Box mb={2}>
          <Typography variant="h4" fontWeight="bold">
            How Generative AI is Transforming Tech
          </Typography>
        </Box>

        {/* Author Info */}
        <Box display="flex" alignItems="center" mb={4}>
          <Avatar sx={{ bgcolor: "#696A75" }}>
            <PersonIcon />
          </Avatar>
          <Typography
            variant="subtitle1"
            sx={{ ml: 1, mr: 2 }}
            className={styles.authorName}
          >
            Adil Rashid
          </Typography>
          <IconButton size="small">
            <CalendarTodayIcon />
          </IconButton>
          <Typography
            variant="subtitle2"
            sx={{ ml: 1 }}
            className={styles.authorDate}
          >
            August 20, 2022
          </Typography>
        </Box>

        {/* Cover Image */}
        <Card>
          <CardMedia
            component="img"
            image={getPublicImageUrl("/images/whatwedo/article.png")}
            alt="Generative AI illustration"
            style={{ borderRadius: "8px" }}
          />
        </Card>

        {/* Blog Body */}
        <Box mt={4}>
          {[
            "Generative AI is a game-changing advancement in artificial intelligence, capable of creating new content like text, images, and even videos autonomously. It’s revolutionizing industries across the board by enhancing creativity and efficiency.",
            "Unlike traditional AI, which analyzes and responds to existing data, generative AI can produce original outputs—be it music, writing, designs, or even functional code—opening doors to innovation and automation on an entirely new level.",
            "Its applications include automated content creation for social media, intelligent ad copywriting, image generation, and even code debugging in software development.",
            "Industries such as gaming, entertainment, and education are increasingly relying on generative AI for immersive environments, simulations, and personalized storytelling.",
            "At CodeKart, we implement generative AI to help businesses automate redundant tasks, create scalable digital solutions, and unlock new creative possibilities across web and app development.",
            "The future of business and tech lies in adaptive, AI-powered systems—and generative AI is paving that road to innovation and transformation.",
          ].map((para, i) => (
            <Typography
              key={i}
              variant="body1"
              paragraph
              className={styles.articleDescription}
            >
              {para}
            </Typography>
          ))}
        </Box>

        {/* Newsletter Signup */}
        <Box className={styles.container}>
          <div>
            <Typography
              variant="h6"
              color="textSecondary"
              className={styles.subtitle}
            >
              Stay up to date
            </Typography>
            <Box className={styles.underline} />
            <Typography variant="h4" className={styles.title}>
              Join Our Newsletter
            </Typography>

            {/* Email Input */}
            <Box className={styles.inputContainer}>
              <TextField
                variant="outlined"
                placeholder="Enter your email..."
                className={styles.inputField}
              />
              <Button variant="contained" className={styles.submitButton}>
                Submit
              </Button>
            </Box>
          </div>
        </Box>
      </Container>

      {/* Related Readings */}
      <Box mx={4}>
        <RelatedReadingComp relatedReadingData={relatedReadingData} />
      </Box>
    </>
  );
}
