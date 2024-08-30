import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";

const cardData = [
  {
    img: "/images/whatwedo/web2.svg",
    text1: "Mobile Application Development",
    text2:
      "Native and cross-platform apps designed for optimal performance and user experience.",
  },
  {
    img: "/images/whatwedo/web3.svg",
    text1: "Cross-Platform Apps",
    text2:
      "Reach a broader audience with apps that work across various devices and operating systems.",
  },
  {
    img: "/images/whatwedo/web4.svg",
    text1: "Website & App Design",
    text2:
      "Stunning, intuitive designs that enhance user engagement and drive results.",
  },
  {
    img: "/images/whatwedo/web2.svg",
    text1: "Mobile Application Development",
    text2:
      "Native and cross-platform apps designed for optimal performance and user experience.",
  },
  {
    img: "/images/whatwedo/web3.svg",
    text1: "Cross-Platform Apps",
    text2:
      "Reach a broader audience with apps that work across various devices and operating systems.",
  },
  {
    img: "/images/whatwedo/web4.svg",
    text1: "Website & App Design",
    text2:
      "Stunning, intuitive designs that enhance user engagement and drive results.",
  },
];

const relatedReadingData = [
  {
    type: "Web",
    title: "Over Ride The Digital Design With Additional",
    img: "/images/whatwedo/relatedReading1.svg",
    date: "August 3, 2024",
  },
  {
    type: "Web",
    title: "Free consultation with experts",
    img: "/images/whatwedo/relatedReading2.svg",
    date: "August 10, 2024",
  },
  {
    type: "Web",
    title: "Quality Design projects completed",
    img: "/images/whatwedo/relatedReading3.svg",
    date: "August 3, 2024",
  },
  {
    type: "Web",
    title: "Task completion planning with timelines",
    img: "/images/whatwedo/relatedReading4.svg",
    date: "August 10, 2024",
  },
];

const allConstantsData = {
  bgVideo: "/videos/web_bg.mp4",
  name: "Web & App Development",
  part1Text1: "Innovative Web & App",
  part1Text2: "Development Solutions",
  part2Img: "/images/whatwedo/web1.svg",
  part2Description:
    "At Codekart, we specialize in crafting custom web and mobile solutions that elevate your digital presence. Whether you're looking to build a sleek website or a cutting-edge mobile app, our team of experts is here to turn your vision into reality.",
  part5Description:
    "Our approach combines innovative design with the latest technology to create web and app solutions that are both functional and aesthetically pleasing. Partner with us to achieve your digital goals.",
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
