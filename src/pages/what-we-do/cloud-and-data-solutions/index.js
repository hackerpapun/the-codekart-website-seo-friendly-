import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import DynamicMetadata from "@/constants/DynamicMetadata";
import { getPublicImageUrl } from "@/constants/images";
import React from "react";

const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/cloud2.svg"),
    text1: "Cloud Infrastructure Management",
    text2:
      "Seamlessly transition to the cloud and integrate with existing systems for enhanced performance.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/cloud3.svg"),
    text1: "Data Analytics & Insights",
    text2:
      "Transform data into actionable insights that drive decision-making and strategy.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/cloud4.svg"),
    text1: "Cloud Migration & Integration",
    text2:
      "Scale your workforce based on project needs without the overhead of permanent hires.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/cloud2.svg"),
    text1: "Cloud Infrastructure Management",
    text2:
      "Seamlessly transition to the cloud and integrate with existing systems for enhanced performance.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/cloud3.svg"),
    text1: "Data Analytics & Insights",
    text2:
      "Transform data into actionable insights that drive decision-making and strategy.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/cloud4.svg"),
    text1: "Cloud Migration & Integration",
    text2:
      "Scale your workforce based on project needs without the overhead of permanent hires.",
  },
];

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

const allConstantsData = {
  // bgVideo: "/videos/ai_bg.mp4",
  bgImage: getPublicImageUrl("/images/whatwedo/cloud_bg.svg"),
  name: "Cloud & Data Solutions",
  part1Text1: "Your Data, Your Future ",
  part1Text2: "Empowered by The Cloud.",
  part2Img: getPublicImageUrl("/images/whatwedo/cloud1.svg"),
  part2Description:
    "Maximize the potential of your data and cloud infrastructure with Codekart. We offer innovative solutions to manage, analyze, and leverage your data for strategic advantage.",
  part5Description:
    "Our expertise in cloud and data solutions helps you harness the power of technology to drive growth and efficiency.",
};

export default function index() {
  return (
    <DynamicMetadata title="Cloud & Data Solutions - Codekart Solutions Private Limited" description="Learn more about Codekart Solutions. ">
      <WhatWeDoServicesGlobalComp
      constantData={allConstantsData}
      cardData={cardData}
      relatedReadingData={relatedReadingData}
    />
    </DynamicMetadata>
  );
}
