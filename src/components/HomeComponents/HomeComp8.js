"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Home/HomeComp8.module.css";
import { montserrat } from "@/assets/fonts/fonts";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { getPublicImageUrl } from "@/constants/images";
import Link from "next/link";

const images = [
  getPublicImageUrl("/images/home/image-1.png"),
  getPublicImageUrl("/images/home/image-2.png"),
  getPublicImageUrl("/images/home/image-3.png"),
  getPublicImageUrl("/images/home/image-4.png"),
  getPublicImageUrl("/images/home/image-5.png"),
  getPublicImageUrl("/images/home/image-6.png"),
  getPublicImageUrl("/images/home/image-7.png"),
  getPublicImageUrl("/images/home/image-8.png"),
];

export default function HomeComp8() {
const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(images.sort(() => Math.random() - 0.5));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className={`${styles.carouselContainer} ${montserrat.variable}`}
      aria-label="CodeKart Office Glimpse Carousel"
    >
      <div className={styles.textContainer}>
        <h2 className={styles.carouselText}>
          Take a peek at what goes on at CodeKart!
        </h2>
        <Link
          href="/what-we-do"
          aria-label="Explore what we do at CodeKart"
        >
          <BsArrowUpRightCircle size={30} color="#fff" />
        </Link>
      </div>

      <div className={styles.slidingImageContainer}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={false}
        >
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className={styles.imageFrame}
              style={{ height: "100%" }}
              role="img"
              aria-label={`Office moment ${index + 1}`}
            >
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundOrigin: "content-box",
                }}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
