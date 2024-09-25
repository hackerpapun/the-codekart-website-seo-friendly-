import dashboard from "@/pages/dashboard";

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
};
