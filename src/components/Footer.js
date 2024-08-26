"use client";
import React from "react";
import CodekartLogo from "../assets/images/navbar/codekartlogo.png";
import { Box, Divider, Grid, Typography } from "@mui/material";
import styles from "../styles/Footer/Footer.module.css";
import { montserrat } from "@/assets/fonts/fonts";
import Image from "next/image";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
export default function Footer() {
  return (
    <Grid
      container
      className={styles.footer}
      direction="column"
      alignItems="center"
    >
      <Image
        src={CodekartLogo}
        alt="CodeKart Logo"
        width={100}
        height={40}
        className={styles.footerImg}
      />

      <Typography variant="body2" align="center">
        CodeKart Solutions Private Limited
        <br />
        Fase-1, Saraswati Vihar, Duplex Número-2,
        <br />
        Detrás de Mani Tribhuvan
        <br />
        Bhubaneswar, Odisha 751024
      </Typography>

      <Box sx={{ my: 2 }}>
        <YouTube fontSize="small" sx={{ mx: 1 }} />
        <Facebook fontSize="small" sx={{ mx: 1 }} />
        <Twitter fontSize="small" sx={{ mx: 1 }} />
        <Instagram fontSize="small" sx={{ mx: 1 }} />
      </Box>
      <Divider sx={{ width: "100%", backgroundColor: "#d3d3d3", my: 2 }} />
      <Typography
        variant="caption"
        align="center"
        className={styles.footerCopyright}
      >
        @2024 Todos los derechos reservados por Codekart Solutions Pvt. Ltd.
      </Typography>
    </Grid>
  );
}
