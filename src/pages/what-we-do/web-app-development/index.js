import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";
import { getPublicImageUrl } from "@/constants/images";
import DynamicMetadata from "@/constants/DynamicMetadata";

const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/web2.svg"),
    alt: "Mobile Application Development Illustration",
    text1: "Mobile Application Development",
    text2:
      "Native and cross-platform apps designed for optimal performance and user experience.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/web3.svg"),
    alt: "Cross-Platform App Compatibility",
    text1: "Cross-Platform Apps",
    text2:
      "Reach a broader audience with apps that work across various devices and operating systems.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/web4.svg"),
    alt: "Website and App Design",
    text1: "Website & App Design",
    text2:
      "Stunning, intuitive designs that enhance user engagement and drive results.",
  },
];

const relatedReadingData = [
  {
    type: "Web",
    title: "Over Ride The Digital Design With Additional",
    img: getPublicImageUrl("/images/whatwedo/relatedReading1.svg"),
    alt: "Digital Design Resource Image",
    date: "August 3, 2024",
  },
  {
    type: "Web",
    title: "Free consultation with experts",
    img: getPublicImageUrl("/images/whatwedo/relatedReading2.svg"),
    alt: "Consultation with Experts",
    date: "August 10, 2024",
  },
  {
    type: "Web",
    title: "Quality Design projects completed",
    img: getPublicImageUrl("/images/whatwedo/relatedReading3.svg"),
    alt: "Completed Design Projects",
    date: "August 3, 2024",
  },
  {
    type: "Web",
    title: "Task completion planning with timelines",
    img: getPublicImageUrl("/images/whatwedo/relatedReading4.svg"),
    alt: "Timeline Planning Illustration",
    date: "August 10, 2024",
  },
];

const allConstantsData = {
  bgVideo: getPublicImageUrl("/videos/web_bg.mp4"),
  name: "Web & App Development",
  part1Text1: "Innovative Web & App",
  part1Text2: "Development Solutions",
  part2Img: getPublicImageUrl("/images/whatwedo/web1.svg"),
  part2Description:
    "At Codekart, we specialize in crafting custom web and mobile development solutions tailored to elevate your digital presence. From sleek websites to cutting-edge apps, our team turns your vision into reality.",
  part5Description:
    "Our approach merges innovative design with the latest technologies to deliver fast, scalable, and visually compelling digital solutions. Partner with Codekart to accelerate your business online.",
};

export default function index() {
  return (
    <DynamicMetadata
      title="Web & App Development Services - Codekart Solutions Private Limited"
      description="Discover top-tier web and app development services by Codekart Solutions. We deliver high-performance websites and mobile apps tailored to your business goals."
    >
      <WhatWeDoServicesGlobalComp
        constantData={allConstantsData}
        cardData={cardData}
        relatedReadingData={relatedReadingData}
      />
    </DynamicMetadata>
  );
}
