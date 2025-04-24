const CDN_PUBLIC_URL = "https://cdn.thecodekart.com/public";
const CDN_ASSETS_URL = "https://cdn.thecodekart.com/assets";

const getPublicImageUrl = (path) => `${CDN_PUBLIC_URL}${encodeURI(path)}`;
const getAssetsImageUrl = (path) => `${CDN_ASSETS_URL}${encodeURI(path)}`;

export const IMAGES = {
  logo: {
    codekartlogo: getAssetsImageUrl("/images/navbar/codekartlogo.png"),
    alt: "CodeKart Solutions Logo",
  },
  home: {
    uilArrowIcon: getAssetsImageUrl("/images/home/uil_arrow-up.png"),
  },
  dashboard: {
    oracleImg: getAssetsImageUrl("/images/home/oracle.png"),
  },
  health: {
    healthBg: getAssetsImageUrl("/images/home/health.png"),
  },
  finance: {
    financeBg: getAssetsImageUrl("/images/home/finance.png"),
  },
  retail: {
    retailBg: getAssetsImageUrl("/images/home/retail.png"),
  },
  manufacturing: {
    manufacturingBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
  automotive: {
    automotiveBg: getAssetsImageUrl("/images/home/manufacturing.png"), // Same image as manufacturing
  },
  logistics: {
    logisticsBg: getAssetsImageUrl("/images/home/manufacturing.png"), // Same image as manufacturing
  },
  realestate: {
    realestateBg: getAssetsImageUrl("/images/home/manufacturing.png"), // Same image as manufacturing
  },
  education: {
    educationBg: getAssetsImageUrl("/images/home/manufacturing.png"), // Same image as manufacturing
  },
  energy: {
    energyBg: getAssetsImageUrl("/images/home/manufacturing.png"), // Same image as manufacturing
  },
};

export { getPublicImageUrl, getAssetsImageUrl };
