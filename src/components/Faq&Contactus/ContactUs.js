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
import emailjs from "@emailjs/browser";

const center = {
  lat: 20.2961,
  lng: 85.8245,
};

function ContactUs() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let tempErrors = {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_message: "",
    };

    if (!formData.user_name.trim()) {
      tempErrors.user_name = "Name is required";
      valid = false;
    }

    if (!formData.user_email.trim()) {
      tempErrors.user_email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.user_email)) {
      tempErrors.user_email = "Invalid email format";
      valid = false;
    }

    if (!formData.user_phone.trim()) {
      tempErrors.user_phone = "Phone number is required";
      valid = false;
    }

    if (!formData.user_message.trim()) {
      tempErrors.user_message = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_cvh2a9a",
          "template_8m5ib0h",
          formData,
          "rtkdXCan4_S3fO2VA"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <Grid
      component="section"
      container
      className={`${styles.contactUsSection} ${montserrat.variable} ${notosans.variable}`}
    >
      <Grid item md={1} />
      <Grid item md={10} className={styles.contactUsTextContainer}>
        <div className={styles.contactUsHeaderContainer}>
          <Typography
            component="h1"
            variant="h3"
            mb={4}
            className={styles.contactUsHeader}
          >
            Contact us
          </Typography>
        </div>
        <Box sx={{ padding: "2rem 1rem" }}>
          <Typography component="p" className={styles.contactUsContent}>
            Welcome to CodeKart, where we transform your digital dreams into
            reality with our comprehensive range of services. Our team of
            experts is dedicated to delivering innovative solutions that drive
            business success.
          </Typography>
        </Box>
        <Box sx={{ padding: "2rem 0" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid
              item
              xs={12}
              md={5}
              className={styles.contactLeft}
              component="article"
            >
              <Typography variant="h4" className={styles.contactHeader}>
                Get in Touch With Us
                <div className={styles.faqHeaderOrangeLine} />
              </Typography>
              <Box className={styles.contactInfoBox} component="address">
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
              <Box className={styles.contactInfoBox} component="address">
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
              <Box className={styles.contactInfoBox} mb={4} component="address">
                <Email className={styles.icon} />
                <Box>
                  <Typography variant="h6" className={styles.infoTitle}>
                    Email address
                  </Typography>
                  <Typography variant="body2">info@thecodekart.com</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              component="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Your name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  variant="standard"
                  margin="normal"
                  required
                  error={Boolean(errors.user_name)}
                  helperText={errors.user_name}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Your email address"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  variant="standard"
                  margin="normal"
                  required
                  error={Boolean(errors.user_email)}
                  helperText={errors.user_email}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Phone number"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleInputChange}
                  variant="standard"
                  margin="normal"
                  required
                  error={Boolean(errors.user_phone)}
                  helperText={errors.user_phone}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Message"
                  name="user_message"
                  multiline
                  maxRows={4}
                  value={formData.user_message}
                  onChange={handleInputChange}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  required
                  error={Boolean(errors.user_message)}
                  helperText={errors.user_message}
                />
              </Box>
              <Box display="flex" alignItems="center" mt={4} mb={5}>
                <Box sx={{ marginLeft: "auto" }}>
                  <ButtonCustom
                    title="Send it to us"
                    icon={true}
                    buttonStyles={styles.sendButton}
                    onClick={handleSubmit}
                  />
                </Box>
              </Box>
            </Grid>

            <Box className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14961.141079966783!2d85.835158!3d20.3711246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ee33cbd993%3A0x7656054823a60bbf!2sCodekart%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724757351531!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Codekart Solutions Location Map"
                title="Codekart Solutions Location"
              ></iframe>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
}

export default ContactUs;
