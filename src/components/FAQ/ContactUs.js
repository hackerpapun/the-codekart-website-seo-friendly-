"use client";
import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "Write Your Name",
    email: "Your email address",
    phone: "Your phone number",
    message: "Write about anything ",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log("Form Data:", formData);
  };
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
          <Typography variant="h3" mb={4} className={styles.contactUsHeader}>
            Contact us
          </Typography>
        </div>
        <Box sx={{ padding: "2rem 1rem" }}>
          <Typography className={styles.contactUsContent}>
            Welcome to CodeKart, where we transform your digital dreams into
            reality with our comprehensive range of services. Our team of
            experts is dedicated to delivering innovative solutions that drive
            business success.
          </Typography>
        </Box>
        <Box sx={{ padding: "2rem 0" }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Left Side - Contact Information */}
            <Grid item xs={12} md={5} className={styles.contactLeft}>
              <Typography variant="h4" className={styles.contactHeader}>
                Get in Touch With Us
                <div className={styles.faqHeaderOrangeLine} />
              </Typography>
              <Box className={styles.contactInfoBox}>
                <LocationOn className={styles.icon} />
                <Box mb={4}>
                  <Typography variant="h6" mt={4} className={styles.infoTitle}>
                    Our location
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.infoDescription}
                  >
                    Duplex No. 2, back side Mani Tribhuvan, Raghunathpur,
                    Bhubaneswar, Odisha 751024
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactInfoBox}>
                <Phone className={styles.icon} />
                <Box mb={4}>
                  <Typography variant="h6" className={styles.infoTitle}>
                    Phone number
                  </Typography>
                  <Typography variant="body2">
                    +91 9178518343, +91 7978924665
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactInfoBox} mb={4}>
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
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <TextField
                    fullWidth
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="standard"
                    margin="normal"
                    required
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    fullWidth
                    label="Your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="standard"
                    margin="normal"
                    required
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="standard"
                    margin="normal"
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Message"
                    name="message"
                    multiline
                    maxRows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                </Box>

                {/* Attachment & Submit Button */}
                <Box display="flex" alignItems="center" mt={4} mb={5}>
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
              </form>
            </Grid>

            <Box className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14961.141079966783!2d85.835158!3d20.3711246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ee33cbd993%3A0x7656054823a60bbf!2sCodekart%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724757351531!5m2!1sen!2sin"
                width="100%" // Full width
                height="400" // Adjust height as needed
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}

export default ContactUs;
