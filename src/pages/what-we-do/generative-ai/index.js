import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import DynamicMetadata from "@/constants/DynamicMetadata";
import { getPublicImageUrl } from "@/constants/images";
import React from "react";

const cardData = [
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai2.svg"),
    text1: "AI Integration in Development",
    text2:
      "Seamlessly embed generative AI into your applications, enabling features such as automated content generation and more",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai3.svg"),
    text1: "Custom AI Solutions",
    text2:
      "Tailor-made AI models designed to meet your specific business needs, from natural language generation.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai4.svg"),
    text1: "AI-Powered User Experience",
    text2:
      "Enhance user experiences by offering AI-driven features like chatbots, AI-assisted design, and personalized content delivery.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai2.svg"),
    text1: "AI Integration in Development",
    text2:
      "Seamlessly embed generative AI into your applications, enabling features such as automated content generation and more",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai3.svg"),
    text1: "Custom AI Solutions",
    text2:
      "Tailor-made AI models designed to meet your specific business needs, from natural language generation.",
  },
  {
    img: getPublicImageUrl("/images/whatwedo/generative_ai4.svg"),
    text1: "AI-Powered User Experience",
    text2:
      "Enhance user experiences by offering AI-driven features like chatbots, AI-assisted design, and personalized content delivery.",
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
  bgVideo: getPublicImageUrl("/videos/generative_ai_bg.mp4"),
  name: "Generative AI",
  part1Text1: "Unlock Creativity with",
  part1Text2: "Generative AI Solutions",
  part2Img: getPublicImageUrl("/images/whatwedo/iot1.svg"),
  part2Description:
    "Empower your business with Codekart's Generative AI solutions. We specialize in creating AI models that generate original content, optimize workflows, and enable innovative applications across industries.",
  part5Description:
    "Our AI-driven solutions are designed to help you stay ahead of the curve by transforming your digital products and services with next-gen intelligence.",
};

export default function Index() {
  return (
    <DynamicMetadata
      title="Generative AI - Codekart Solutions Private Limited"
      description="Learn more about Codekart Solutions. "
    >
      <WhatWeDoServicesGlobalComp
        constantData={allConstantsData}
        cardData={cardData}
        relatedReadingData={relatedReadingData}
      />
    </DynamicMetadata>
  );
}
