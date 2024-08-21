import { Inter, Montserrat, Noto_Sans, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const notosans = Noto_Sans({
  weight: ["300","400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosans",
});