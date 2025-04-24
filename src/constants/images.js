const CDN_PUBLIC_URL = "https://cdn.thecodekart.com/public";
const CDN_ASSETS_URL = "https://cdn.thecodekart.com/assets";

export const getPublicImageUrl = (path) => `${CDN_PUBLIC_URL}${path}`;
export const getAssetsImageUrl = (path) => `${CDN_ASSETS_URL}${path}`;

export const IMAGES = {
  logo: {
    codekartlogo: getAssetsImageUrl("/images/navbar/codekartlogo.png"),
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
    automotiveBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
  logistics: {
    logisticsBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
  realestate: {
    realestateBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
  education: {
    educationBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
  energy: {
    energyBg: getAssetsImageUrl("/images/home/manufacturing.png"),
  },
};
