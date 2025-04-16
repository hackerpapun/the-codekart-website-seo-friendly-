import React from "react";
import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import { getPublicImageUrl } from "@/constants/images";
import DynamicMetadata from "@/constants/DynamicMetadata";

// Card section data
const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/qa2.svg"),
    text1: "Comprehensive QA Testing",
    text2:
      "End-to-end testing services to verify functionality, performance, and security.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/qa3.svg"),
    text1: "Automated Testing Solutions",
    text2:
      "Implement automated tests to increase efficiency and coverage while reducing time and cost.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/qa4.svg"),
    text1: "Manual Testing Services",
    text2:
      "Expert manual testing to detect issues that automated tests might miss.",
  },
];

// Related reading data
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

// Page constants
const allConstantsData = {
  bgImage: getPublicImageUrl("/images/whatwedo/qa_bg.svg"),
  name: "Quality Assurance & Testing",
  part1Text1: "Comprehensive QA & Testing",
  part1Text2: "for Superior Quality",
  part2Img: getPublicImageUrl("/images/whatwedo/qa1.svg"),
  part2Description:
    "Ensure the highest quality standards for your software with Codekart's QA and testing services. We deliver thorough testing solutions to identify and resolve issues, ensuring flawless performance and user satisfaction.",
  part5Description:
    "Our rigorous QA and testing processes ensure your software meets the highest standards of quality, reliability, and user satisfaction.",
};

// Exported Page Component
export default function QualityAssurancePage() {
  return (
    <DynamicMetadata
      title="Quality Assurance & Testing - Codekart Solutions Private Limited"
      description="Learn more about Codekart Solutions."
    >
      <WhatWeDoServicesGlobalComp
        constantData={allConstantsData}
        cardData={cardData}
        relatedReadingData={relatedReadingData}
      />
    </DynamicMetadata>
  );
}
