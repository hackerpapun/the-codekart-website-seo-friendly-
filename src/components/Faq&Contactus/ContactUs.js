import React from "react";
import styles from "../../styles/Faq/contactUs.module.css";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import {
  LocationOn,
  Phone,
  Email,
  AttachFile,
  Send,
} from "@mui/icons-material";
import ButtonCustom from "../ButtonCustom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 20.2961,
  lng: 85.8245,
};
function ContactUs() {
  return (
    <Grid
      container
      className={`${styles.contactUsSection} ${montserrat.variable} ${notosans.variable}`}
    >
      <Grid item md={1}></Grid>
      <Grid
        item
        md={10}
        className={styles.contactUsTextContainer}
        // style={{ padding: "0px 1rem" }}
      >
        <div className={styles.contactUsHeaderContainer}>
          <h2 className={styles.contactUsHeader}>Contact us</h2>
        </div>
        <div>
          <p className={styles.contactUsContent}>
            Welcome to CodeKart, where we transform your digital dreams into
            reality with our comprehensive range of services. Our team of
            experts is dedicated to delivering innovative solutions that drive
            business success.
          </p>
        </div>
        <Box sx={{ padding: "2rem 0" }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Left Side - Contact Information */}
            <Grid item xs={12} md={5} className={styles.contactLeft}>
              <Typography variant="h4" className={styles.contactHeader}>
                Get in Touch With Us
              </Typography>
              <Box className={styles.contactInfoBox}>
                <LocationOn className={styles.icon} />
                <Box>
                  <Typography variant="h6" className={styles.infoTitle}>
                    Our location
                  </Typography>
                  <Typography variant="body2">
                    Duplex No. 2, back side Mani Tribhuvan, Raghunathpur,
                    Bhubaneswar, Odisha 751024
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactInfoBox}>
                <Phone className={styles.icon} />
                <Box>
                  <Typography variant="h6" className={styles.infoTitle}>
                    Phone number
                  </Typography>
                  <Typography variant="body2">
                    +91 9178518343, +91 7978924665
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactInfoBox}>
                <Email className={styles.icon} />
                <Box>
                  <Typography variant="h6" className={styles.infoTitle}>
                    Email address
                  </Typography>
                  <Typography variant="body2">info@thecodekart.com</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label="Your name"
                variant="standard"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your email address"
                variant="standard"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone number"
                variant="standard"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                variant="standard"
                multiline
                rows={4}
                margin="normal"
              />

              {/* Attachment & Submit Button */}
              <Box display="flex" alignItems="center" mt={2}>
                <Link
                  href="#"
                  underline="hover"
                  className={styles.attachmentLink}
                >
                  <IconButton>
                    <AttachFile />
                  </IconButton>
                  Attachment
                </Link>
                <Box sx={{ marginLeft: "auto" }}>
                  <ButtonCustom
                    title="Send it to us"
                    icon={true}
                    buttonStyles={styles.sendButton}
                  />
                </Box>
              </Box>
            </Grid>
            {/* <Box display="flex" alignItems="center" mt={2}></Box> */}
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}

export default ContactUs;
