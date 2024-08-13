import { Inter, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
