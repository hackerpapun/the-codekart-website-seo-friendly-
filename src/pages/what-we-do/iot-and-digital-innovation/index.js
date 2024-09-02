import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/iot2.svg",
    text1: "IoT Device Integration",
    text2:
      "Connect and manage IoT devices to enhance functionality and data collection.",
  },
  {
    img: "/images/whatwedo/iot3.svg",
    text1: "Smart Solutions Development",
    text2:
      "Create intelligent systems that improve efficiency and provide valuable insights.",
  },
  {
    img: "/images/whatwedo/iot4.svg",
    text1: "Embedded Systems Design",
    text2:
      "Develop embedded systems for a range of applications, from consumer electronics to industrial equipment.",
  },
  {
    img: "/images/whatwedo/iot2.svg",
    text1: "IoT Device Integration",
    text2:
      "Connect and manage IoT devices to enhance functionality and data collection.",
  },
  {
    img: "/images/whatwedo/iot3.svg",
    text1: "Smart Solutions Development",
    text2:
      "Create intelligent systems that improve efficiency and provide valuable insights.",
  },
  {
    img: "/images/whatwedo/iot4.svg",
    text1: "Embedded Systems Design",
    text2:
      "Develop embedded systems for a range of applications, from consumer electronics to industrial equipment.",
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
  bgVideo: "/videos/iot_bg.mp4",
  // bgImage: "/images/whatwedo/AI_bg.svg",
  name: "IoT & Digital Innovation",
  part1Text1: "Pioneering IoT & Digital",
  part1Text2: "Innovation Solutions",
  part2Img: "/images/whatwedo/iot1.svg",
  part2Description:
    "Stay at the forefront of technology with Codekart's IoT and digital innovation services. We provide cutting-edge solutions that drive innovation and optimize your operations.",
  part5Description:
    "Our cybersecurity and risk management services help you stay secure and resilient in a constantly evolving threat landscape.",
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
