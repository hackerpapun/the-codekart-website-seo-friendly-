import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";
import { getPublicImageUrl } from "@/constants/images";
import DynamicMetadata from "@/constants/DynamicMetadata";

const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/resource2.svg"),
    text1: "Dedicated Development Teams",
    text2:
      "Access specialized talent for your development projects, ensuring quality and efficiency.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/resource3.svg"),
    text1: "Remote IT Staffing",
    text2:
      "Hire experienced IT professionals to support your operations from anywhere in the world.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/resource4.svg"),
    text1: "Project-Based Outsourcing",
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
  // bgVideo: "/videos/iot_bg.mp4",
  bgImage: getPublicImageUrl("/images/whatwedo/resource_bg.svg"),
  name: "Resource Outsourcing",
  part1Text1: "Expert Resource Outsourcing",
  part1Text2: "for Your Business Needs",
  part2Img: getPublicImageUrl("/images/whatwedo/resource1.svg"),
  part2Description:
    "Optimize your operations with Codekart's resource outsourcing services. We provide skilled professionals and dedicated teams to support your projects and enhance your business capabilities.",
  part5Description:
    "Our resource outsourcing solutions help you focus on core business activities while we handle the specialized tasks, providing flexibility and expertise.",
};

export default function index() {
  return (
    <DynamicMetadata title="Resource Outsourcing - Codekart" description="Learn more about Codekart Solutions. ">
      <WhatWeDoServicesGlobalComp
      constantData={allConstantsData}
      cardData={cardData}
      relatedReadingData={relatedReadingData}
    />
    </DynamicMetadata>
  );
}
