"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Home/HomeComp8.module.css";
import { montserrat } from "@/assets/fonts/fonts";
import { BsArrowUpRightCircle } from "react-icons/bs";

const images = [
  "/images/home/image-1.png",
  "/images/home/image-2.png",
  "/images/home/image-3.png",
  "/images/home/image-4.png",
  "/images/home/image-5.png",
  "/images/home/image-6.png",
  "/images/home/image-7.png",
  "/images/home/image-8.png",
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
    <div className={`${styles.carouselContainer} ${montserrat.variable}`}>
      <div className={styles.textContainer}>
        <div className={styles.carouselText}>
          Take a peek at what goes on at CodeKart!
        </div>
        <BsArrowUpRightCircle size={30} color="#fff" />
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
            <div key={index} className={styles.imageFrame}>
              <img
                src={image}
                alt={`carousel-image-${index}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
