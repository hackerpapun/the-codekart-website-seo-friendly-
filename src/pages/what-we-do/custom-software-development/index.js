import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/software2.svg",
    text1: "Tailored Software Solutions",
    text2:
      "Custom software designed to fit your specific requirements and business processes.",
  },
  {
    img: "/images/whatwedo/software3.svg",
    text1: "Enterprise Software Systems",
    text2:
      "Develop robust systems that streamline operations and support large-scale business needs.",
  },
  {
    img: "/images/whatwedo/software4.svg",
    text1: "Custom Application Development",
    text2:
      "Build applications that enhance functionality and integrate seamlessly with your existing systems.",
  },
  {
    img: "/images/whatwedo/software2.svg",
    text1: "Tailored Software Solutions",
    text2:
      "Custom software designed to fit your specific requirements and business processes.",
  },
  {
    img: "/images/whatwedo/software3.svg",
    text1: "Enterprise Software Systems",
    text2:
      "Develop robust systems that streamline operations and support large-scale business needs.",
  },
  {
    img: "/images/whatwedo/software4.svg",
    text1: "Custom Application Development",
    text2:
      "Build applications that enhance functionality and integrate seamlessly with your existing systems.",
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
  bgImage: "/images/whatwedo/software_bg.svg",
  name: "Custom Software Development",
  part1Text1: "Tailored Software Development",
  part1Text2: "for Your Unique Needs",
  part2Img: "/images/whatwedo/software1.svg",
  part2Description:
    "Transform your business with Codekart's custom software development services. We create bespoke software solutions designed to address your unique challenges and drive business growth.",
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
