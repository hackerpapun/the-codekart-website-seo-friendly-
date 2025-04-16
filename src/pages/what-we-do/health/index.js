// Imports
import React from "react";
import WhatWeDoServicesGlobalComp1 from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp1";
import { getAssetsImageUrl, getPublicImageUrl } from "@/constants/images";

// Card Section Data
const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/resource2.svg"),
    text1: "Cloud Infrastructure Management",
    text2:
      "Efficiently manage and scale your cloud resources to meet your business needs.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/resource3.svg"),
    text1: "Data Analytics & Insights",
    text2:
      "Transform data into actionable insights that drive decision-making and strategy.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/resource4.svg"),
    text1: "Cloud Migration & Integration",
    text2:
      "Seamlessly transition to the cloud and integrate with existing systems for enhanced performance.",
  },
];

// Related Reading Section
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

// Constant Data for Hero & About Section
const allConstantsData = {
  // bgVideo: "/videos/iot_bg.mp4", // uncomment if video background needed
  healthBg: getAssetsImageUrl("/images/home/health.png"),
  name: "Healthcare",
  part1Text1: "Patient at the center",
  part1Text3:
    "We help you realize intelligent, connected, and patient-centric healthcare.",
  part2Img: getPublicImageUrl("/images/whatwedo/resource1.svg"),
  part2Description:
    "Optimize your operations with Codekart's resource outsourcing services. We provide skilled professionals and dedicated teams to support your projects and enhance your business capabilities.",
  part5Description:
    "Our resource outsourcing solutions help you focus on core business activities while we handle the specialized tasks, providing flexibility and expertise.",
};

// Final Component Export
export default function HealthcareWhatWeDoPage() {
  return (
    <WhatWeDoServicesGlobalComp1
      constantData={allConstantsData}
      cardData={cardData}
      relatedReadingData={relatedReadingData}
    />
  );
}
