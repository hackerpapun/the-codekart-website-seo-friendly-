import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/AI_3.svg",
    text1: "AI Integration",
    text2:
      "Seamlessly integrate AI into your existing systems to streamline operations and enhance efficiency.",
  },
  {
    img: "/images/whatwedo/AI_4.svg",
    text1: "Machine Learning Development",
    text2: "Custom-built ML models tailored to your specific needs and goals.",
  },
  {
    img: "/images/whatwedo/AI_5.svg",
    text1: "Predictive Analytics",
    text2:
      "Harness the power of data to forecast trends and make informed business decisions.",
  },
  {
    img: "/images/whatwedo/AI_3.svg",
    text1: "AI Integration",
    text2:
      "Seamlessly integrate AI into your existing systems to streamline operations and enhance efficiency.",
  },
  {
    img: "/images/whatwedo/AI_4.svg",
    text1: "Machine Learning Development",
    text2: "Custom-built ML models tailored to your specific needs and goals.",
  },
  {
    img: "/images/whatwedo/AI_5.svg",
    text1: "Predictive Analytics",
    text2:
      "Harness the power of data to forecast trends and make informed business decisions.",
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
  bgVideo: "/videos/ai_bg.mp4",
  name: "Artificial Intelligence & Machine Learning",
  part1Text1: "Unlock the Power of",
  part1Text2: "AI & Machine Learning",
  part2Img: "/images/whatwedo/AI_1.svg",
  part2Description:
    "Leverage the transformative potential of AI and ML with Codekart. Our advanced solutions enable you to automate processes, make data-driven decisions, and gain a competitive edge.",
  part5Description:
    "With our AI and ML expertise, we help businesses stay ahead of the competition by providing innovative solutions that meet their unique challenges.",
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
