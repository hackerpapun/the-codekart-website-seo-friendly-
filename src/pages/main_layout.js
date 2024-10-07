// this file will run first

import Navbar from "../components/NavBarComponent/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { getPublicImageUrl } from "@/constants/images";
import { RedirectToNewTab } from "@/constants/RedirectToNewTab";
import { X } from "@mui/icons-material";

export const metadata = {
  title: "Codekart",
  description: "Codekart Solutions PVT LTD",
};

export default function RootLayout({ children }) {
  const [showCard, setShowCard] = useState(false);

  const handleHideMessage = () => {
    setShowCard(true);
  };
  const handleShowCard = () => {
    setShowCard(false);
  };

  const iconVariants = {
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "3rem", position: "relative" }}>
        <div className="StickyContainer">
          <div className="MotionDiv">
            <motion.div
              className="MainMessageContainer"
              initial={{ x: 0 }}
              animate={{ x: showCard ? 250 : 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleHideMessage}
            >
              <img
                src={getPublicImageUrl("/images/home/messageIcon.png")}
                alt="Course Image Placeholder"
                className="messageContainer"
              />
            </motion.div>
            <motion.div
              className="animatedCard"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: showCard ? 0 : 250, opacity: showCard ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <RxCross2 className="crossIcon" onClick={handleShowCard} />

              <RedirectToNewTab url={"https://www.instagram.com/thecodekart/"} >
                <motion.div
                  initial={{ x: 55, y: 65 }}
                  animate={showCard ? "visible" : "hidden"}
                  custom={{ x: 0, y: 0 }}
                  variants={iconVariants}
                  className="ingramIcon"
                >
                  <FaInstagram className="inImage" />
                </motion.div>
              </RedirectToNewTab>
              <RedirectToNewTab url={""}>
                <motion.div
                  initial={{ x: 85, y: 37 }}
                  animate={showCard ? "visible" : "hidden"}
                  custom={{ x: 0, y: 0 }}
                  variants={iconVariants}
                  className="whatsApp"
                >
                  <FaWhatsapp className="inImage" />
                </motion.div>
              </RedirectToNewTab>
              <RedirectToNewTab url={"https://www.linkedin.com/company/codekart/"}>
                <motion.div
                  initial={{ x: 85, y: -5 }}
                  animate={showCard ? "visible" : "hidden"}
                  custom={{ x: 0, y: 0 }}
                  variants={iconVariants}
                  className="LinkdLn"
                >
                  <FaLinkedinIn className="inImage" />
                </motion.div>
              </RedirectToNewTab>
              <RedirectToNewTab url={"https://x.com/codekart"}>
                <motion.div
                  initial={{ x: 55, y: -45 }}
                  animate={showCard ? "visible" : "hidden"}
                  custom={{ x: 0, y: 0 }}
                  variants={iconVariants}
                  className="ContacUs"
                  style={{backgroundColor:"black"}}
                >
                  <X className="inImage" />
                </motion.div>
              </RedirectToNewTab>
            </motion.div>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
