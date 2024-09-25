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
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "../../../../styles/WhatWeDoStyles/articleStyle.module.css";

import { notosans } from "@/assets/fonts/fonts";
import ButtonCustom from "@/components/ButtonCustom";
import HomeComp4 from "@/components/HomeComponents/HomeComp4";
import RelatedReadingComp from "@/components/RelatedReadingComp/RelatedReadingComp";
import { getPublicImageUrl } from "@/constants/images";

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
      <Container maxWidth="md" className={` ${notosans.variable}`}>
        {/* Category */}
        <Box mt={4} mb={2}>
          <Chip
            label="AI & MI"
            color="primary"
            style={{ fontWeight: "bold" }}
          />
        </Box>
        {/* Title Section */}
        <Box mb={2}>
          <Typography variant="h4" fontWeight="bold">
            How Generative AI is Transforming Tech
          </Typography>
        </Box>
        {/* Author and Date */}
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
        {/* Main Image */}
        <Card>
          <CardMedia
            component="img"
            image={getPublicImageUrl("/images/whatwedo/article.png")}
            alt="Enigma Machine"
            style={{ borderRadius: "8px" }}
          />
        </Card>
        {/* Article Content */}
        <Box mt={4}>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
          >
            Generative AI is a game-changing advancement in artificial
            intelligence, capable of creating new content like text, images, and
            even videos autonomously. It’s revolutionizing industries across the
            board by enhancing creativity and efficiency...
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
          >
            Generative AI is a game-changing advancement in artificial
            intelligence, capable of creating new content like text, images, and
            even music based on patterns learned from data. Unlike traditional
            AI, which analyzes and responds to existing information, generative
            AI can produce original content, making it a powerful tool across
            industries.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
          >
            Key applications of generative AI include content creation, where it
            automates writing and designing social media posts, ads, and
            articles. In software development, it helps generate and debug code,
            speeding up development cycles. The gaming and entertainment
            industries also benefit, using generative AI to create dynamic
            environments, realistic simulations, and personalized narratives.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
          >
            Businesses leverage generative AI for increased efficiency and cost
            savings by automating tasks that traditionally require manual labor.
            Its scalability allows for personalized content generation at
            massive scales, while its innovative potential opens new doors for
            product design and creative solutions.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
          >
            At Codekart, we harness generative AI to drive innovation in web and
            app development. Our custom solutions empower businesses to
            automate, scale, and innovate with AI-powered technology, ensuring
            they stay competitive in the rapidly evolving tech landscape.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className={styles.articleDescription}
            mb={5}
          >
            Generative AI is here to stay, offering limitless possibilities for
            the future of business and creativity.
          </Typography>
        </Box>
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

            {/* Input and Button Section */}
            <Box className={styles.inputContainer}>
              <TextField
                variant="outlined"
                placeholder="Enter your email.."
                className={styles.inputField}
              />
              <Button variant="contained" className={styles.submitButton}>
                Submit
              </Button>
            </Box>
          </div>
        </Box>
      </Container>

      <Box mx={4}>
        <RelatedReadingComp relatedReadingData={relatedReadingData} />
      </Box>
    </>
  );
}
