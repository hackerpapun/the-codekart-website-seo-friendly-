import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/AI_2.svg",
    text1: "Dedicated Development Teams",
    text2:
      "Access specialized talent for your development projects, ensuring quality and efficiency.",
  },
  {
    img: "/images/whatwedo/AI_2.svg",
    text1: "Remote IT Staffing",
    text2:
      "Hire experienced IT professionals to support your operations from anywhere in the world.",
  },
  {
    img: "/images/whatwedo/AI_2.svg",
    text1: "Project-Based Outsourcing",
    text2:
      "Scale your workforce based on project needs without the overhead of permanent hires.",
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
  bgImage: "/images/whatwedo/AI_bg.svg",
  name: "Artificial Intelligence & Machine Learning",
  part1Text1: "Your Vision, Our Talent ",
  part1Text2: "Empower The Team.",
  part2Img: "/images/whatwedo/AI_1.svg",
  part2Description:
    "Optimize your operations with Codekart's resource outsourcing services. We provide skilled professionals and dedicated teams to support your projects and enhance your business capabilities.",
  part5Description:
    "Our resource outsourcing solutions help you focus on core business activities while we handle the specialized tasks, providing flexibility and expertise.",
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
