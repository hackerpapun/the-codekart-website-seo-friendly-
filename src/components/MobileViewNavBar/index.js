// import React, { useState } from "react";
// import styles from "../../styles/mobileview.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import CodekartLogo from "../../assets/images/navbar/codekartlogo.png";
// import { RxCross2 } from "react-icons/rx";
// import Image from "next/image";
// import { Grid } from "@mui/material";
// import { FaAngleDown } from "react-icons/fa6";

// const MobileViewNavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [Aboutus, setAboutus] = useState(false);
//   const [Contactus, setContactus] = useState(false);
//   const [Industries, setIndustries] = useState(false);
//   const [Services, setServices] = useState(false);
//   const [CodeKart, setCodeKart] = useState(false);
//   const [Careers, setCareers] = useState(false);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleAboutUsArrow = () => {
//     setAboutus(true);
//     setContactus(false);
//     setIndustries(false);
//     setServices(false);
//     setCodeKart(false);
//     setCareers(false);
//   };
//   const handleContactUsArrow = () => {
//     setAboutus(false);
//     setContactus(true);
//     setIndustries(false);
//     setServices(false);
//     setCodeKart(false);
//     setCareers(false);
//   };
//   const handleIndustryUsArrow = () => {
//     setAboutus(false);
//     setContactus(false);
//     setIndustries(true);
//     setServices(false);
//     setCodeKart(false);
//     setCareers(false);
//   };
//   const handleServiceUsArrow = () => {
//     setAboutus(false);
//     setContactus(false);
//     setIndustries(false);
//     setServices(true);
//     setCodeKart(false);
//     setCareers(false);
//   };
//   const handleCodeKartUsArrow = () => {
//     setAboutus(false);
//     setContactus(false);
//     setIndustries(false);
//     setServices(false);
//     setCodeKart(true);
//     setCareers(false);
//   };
//   const handleCarrierArrow = () => {
//     setAboutus(false);
//     setContactus(false);
//     setIndustries(false);
//     setServices(false);
//     setCodeKart(false);
//     setCareers(true);
//   };

//   return (
//     <>
//       <Grid container className={styles.navbarContainer}>
//         <Grid item sm={6} xs={6} className={styles.logoContainer}>
//           <Image
//             src={CodekartLogo}
//             alt="CodeKart Logo"
//             className={styles.NavbarLogo}
//           />
//         </Grid>
//         <Grid
//           item
//           sm={6}
//           xs={6}
//           className={styles.menuContainer}
//           onClick={handleToggleMenu}
//         >
//           <div
//             className={`${styles.iconWrapper} ${isMenuOpen ? styles.open : ""}`}
//           >
//             <GiHamburgerMenu
//               className={`${styles.icon} ${styles.hamburgerIcon}`}
//             />
//             <RxCross2 className={`${styles.icon} ${styles.crossIcon}`} />
//           </div>
//         </Grid>
//       </Grid>
//       <div
//         className={`${styles.SideBarScreen} ${isMenuOpen ? styles.open : ""}`}
//       >
//         <Grid container>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleAboutUsArrow}
//           >
//             <Grid sm={6} xs={6}>
//               About Us
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={Aboutus ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleContactUsArrow}
//           >
//             <Grid sm={6} xs={6}>
//               Contact Us
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={Contactus ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleIndustryUsArrow}
//           >
//             <Grid sm={6} xs={6}>
//               Industries
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={Industries ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleServiceUsArrow}
//           >
//             <Grid sm={6} xs={6}>
//               Services
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={Services ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleCodeKartUsArrow}
//           >
//             <Grid sm={6} xs={6}>
//               Why Choose CodeKart?
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={CodeKart ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             className={styles.sideContaint}
//             onClick={handleCarrierArrow}
//           >
//             <Grid sm={6} xs={6}>
//               Careers
//             </Grid>
//             <Grid sm={6} xs={6} className={styles.arrowContainer}>
//               <FaAngleDown
//                 className={Careers ? styles.rotate : styles.noRotate}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// };

// export default MobileViewNavBar;

import React, { useState } from "react";
import styles from "../../styles/mobileview.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import CodekartLogo from "../../assets/images/navbar/codekartlogo.png";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Grid } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

const MobileViewNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const menuItems = [
    "About Us",
    "Contact Us",
    "Industries",
    "Services",
    "Why Choose CodeKart?",
    "Careers",
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <Grid container className={styles.navbarContainer}>
        <Grid item sm={6} xs={6} className={styles.logoContainer}>
          <Image
            src={CodekartLogo}
            alt="CodeKart Logo"
            className={styles.NavbarLogo}
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={6}
          className={styles.menuContainer}
          onClick={handleToggleMenu}
        >
          <div
            className={`${styles.iconWrapper} ${isMenuOpen ? styles.open : ""}`}
          >
            <GiHamburgerMenu
              className={`${styles.icon} ${styles.hamburgerIcon}`}
            />
            <RxCross2 className={`${styles.icon} ${styles.crossIcon}`} />
          </div>
        </Grid>
      </Grid>
      <div
        className={`${styles.SideBarScreen} ${isMenuOpen ? styles.open : ""}`}
      >
        <Grid container>
          {menuItems.map((item, index) => (
            <Grid
              key={index}
              item
              sm={12}
              xs={12}
              className={styles.sideContaint}
              onClick={() => handleSectionClick(item)}
            >
              <Grid sm={6} xs={6}>
                {item}
              </Grid>
              <Grid sm={6} xs={6} className={styles.arrowContainer}>
                <FaAngleDown
                  className={
                    activeSection === item ? styles.rotate : styles.noRotate
                  }
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MobileViewNavBar;
