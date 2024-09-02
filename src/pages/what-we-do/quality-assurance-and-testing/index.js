import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/qa2.svg",
    text1: "Comprehensive QA Testing",
    text2:
      "End-to-end testing services to verify functionality, performance, and security.",
  },
  {
    img: "/images/whatwedo/qa3.svg",
    text1: "Automated Testing Solutions",
    text2:
      "Implement automated tests to increase efficiency and coverage while reducing time and cost.",
  },
  {
    img: "/images/whatwedo/qa4.svg",
    text1: "Manual Testing Services",
    text2:
      "Expert manual testing to detect issues that automated tests might miss.",
  },
  {
    img: "/images/whatwedo/qa2.svg",
    text1: "Comprehensive QA Testing",
    text2:
      "End-to-end testing services to verify functionality, performance, and security.",
  },
  {
    img: "/images/whatwedo/qa3.svg",
    text1: "Automated Testing Solutions",
    text2:
      "Implement automated tests to increase efficiency and coverage while reducing time and cost.",
  },
  {
    img: "/images/whatwedo/qa4.svg",
    text1: "Manual Testing Services",
    text2:
      "Expert manual testing to detect issues that automated tests might miss.",
  },
];

const relatedReadingData = [
  {
    type: "Resource",
    title: "Over Ride The Digital Design With Additional",
    img: "/images/whatwedo/relatedReading1.svg",
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Free consultation with experts",
    img: "/images/whatwedo/relatedReading2.svg",
    date: "August 10, 2024",
  },
  {
    type: "Resource",
    title: "Quality Design projects completed",
    img: "/images/whatwedo/relatedReading3.svg",
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Task completion planning with timelines",
    img: "/images/whatwedo/relatedReading4.svg",
    date: "August 10, 2024",
  },
];

const allConstantsData = {
  // bgVideo: "/videos/web_bg.mp4",
  bgImage: "/images/whatwedo/qa_bg.svg",
  name: "Quality Assurance & Testing",
  part1Text1: "Comprehensive QA & Testing",
  part1Text2: "for Superior Quality",
  part2Img: "/images/whatwedo/qa1.svg",
  part2Description:
    "Ensure the highest quality standards for your software with Codekart's QA and testing services. We deliver thorough testing solutions to identify and resolve issues, ensuring flawless performance and user satisfaction.",
  part5Description:
    "Our rigorous QA and testing processes ensure your software meets the highest standards of quality, reliability, and user satisfaction.",
};

export default function index() {
  return (
    <WhatWeDoServicesGlobalComp
      constantData={allConstantsData}
      cardData={cardData}
      relatedReadingData={relatedReadingData}
    />
  );
}
