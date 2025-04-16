import WhatWeDoServicesGlobalComp from "@/components/WhatWeDoComponents/WhatWeDoServicesGlobalComp";
import React from "react";
import { getPublicImageUrl } from "@/constants/images";
import DynamicMetadata from "@/constants/DynamicMetadata";

// SEO Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resource Outsourcing",
  description:
    "Codekart Solutions provides expert-level resource outsourcing services, including dedicated development teams, remote IT staffing, and project-based outsourcing.",
  provider: {
    "@type": "Organization",
    name: "Codekart Solutions Private Limited",
    url: "https://www.codekart.tech",
    logo: getPublicImageUrl("/images/codekart_logo.svg"),
  },
  serviceType: ["IT Staffing", "Dedicated Developers", "Project Outsourcing"],
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.codekart.tech/what-we-do/resource-outsourcing",
};

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
    <>
      <DynamicMetadata
        title="Resource Outsourcing - Codekart Solutions Private Limited"
        description="Codekart provides dedicated teams, remote IT staffing, and project-based outsourcing services to optimize your operations and scale efficiently."
        canonical="https://www.codekart.tech/what-we-do/resource-outsourcing"
        openGraph={{
          title: "Resource Outsourcing Services | Codekart Solutions",
          description:
            "Access expert IT resources including dedicated developers, remote teams, and outsourcing solutions tailored to your business needs.",
          url: "https://www.codekart.tech/what-we-do/resource-outsourcing",
          type: "website",
          images: [
            {
              url: getPublicImageUrl("/images/whatwedo/resource_bg.svg"),
              width: 1200,
              height: 630,
              alt: "Resource Outsourcing by Codekart",
            },
          ],
        }}
        twitter={{
          card: "summary_large_image",
          title: "Resource Outsourcing Services | Codekart Solutions",
          description:
            "Hire top tech talent and optimize your operations with Codekart’s expert resource outsourcing services.",
          image: getPublicImageUrl("/images/whatwedo/resource_bg.svg"),
        }}
      />

      {/* JSON-LD for Schema.org SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <WhatWeDoServicesGlobalComp
        constantData={allConstantsData}
        cardData={cardData}
        relatedReadingData={relatedReadingData}
      />
    </>
  );
}
