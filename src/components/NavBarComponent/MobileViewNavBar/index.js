import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/NavbarStyles/mobileview.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Grid } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IMAGES } from "@/constants/images";

const MobileViewNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [subMenuHeights, setSubMenuHeights] = useState({});

  const subMenuRefs = useRef({});

  const menuItems = [
    {
      title: "What we do",
      subItems: ["Overview"],
    },
    {
      title: "What we are",
      subItems: ["Overview"],
    },
    {
      title: "Insights",
      subItems: ["Overview"],
    },
    {
      title: "Services",
      subItems: [
        "Custom Software Development",
        "Mobile app development",
        "Web app development",
        "QA Testing",
        "UI/UX Design",
        "AI & Machine Learning",
        "Resource outsourcing",
      ],
    },
    {
      title: "About Us",
      subItems: ["Strength", "Vision", "Careers"],
    },
    {
      title: "Contact Us",
      subItems: ["FAQ", "Get in Touch With Us"],
    },
    {
      title: "Industries",
      subItems: [
        "Healthcare",
        "Finance",
        "Retail",
        "Manufacturing",
        "Automotive",
        "Logistics",
        "Real Estate",
        "Education",
        "Energy",
      ],
    },
    {
      title: "Why Choose CodeKart?",
      subItems: ["Strength", "Vision"],
    },
  ];

  useEffect(() => {
    menuItems.forEach((item) => {
      if (subMenuRefs.current[item.title]) {
        setSubMenuHeights((prev) => ({
          ...prev,
          [item.title]: subMenuRefs.current[item.title].scrollHeight,
        }));
      }
    });
  }, []);

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
          <img
            src={IMAGES.logo.codekartlogo}
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
        <div className={styles.menuItemsContainer}>
          <Grid container>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  className={styles.sideContaint}
                  onClick={() => handleSectionClick(item.title)}
                >
                  <Grid sm={8} xs={8} className={styles.ItemTitle}>
                    {item.title}
                  </Grid>
                  <Grid sm={4} xs={4} className={styles.arrowContainer}>
                    <FaAngleDown
                      className={
                        activeSection === item.title
                          ? styles.rotate
                          : styles.noRotate
                      }
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  className={`${styles.subItemContainer} ${
                    activeSection === item.title ? styles.open : ""
                  }`}
                  ref={(el) => (subMenuRefs.current[item.title] = el)}
                  style={{
                    maxHeight:
                      activeSection === item.title
                        ? `${subMenuHeights[item.title]}px`
                        : "0px",
                  }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className={styles.subItem}>
                      {subItem}
                    </div>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MobileViewNavBar;

// import React, { useState, useRef, useEffect } from "react";
// import styles from "../../styles/mobileview.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import Image from "next/image";
// import { Grid } from "@mui/material";
// import { FaAngleDown } from "react-icons/fa6";

// const MobileViewNavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [subMenuHeights, setSubMenuHeights] = useState({});

//   const subMenuRefs = useRef({});

//   const menuItems = [
//     // ... (your menuItems array remains unchanged)
//   ];

//   useEffect(() => {
//     menuItems.forEach((item) => {
//       if (subMenuRefs.current[item.title]) {
//         setSubMenuHeights((prev) => ({
//           ...prev,
//           [item.title]: subMenuRefs.current[item.title].scrollHeight,
//         }));
//       }
//     });
//   }, []);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSectionClick = (section) => {
//     setActiveSection(activeSection === section ? null : section);
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
//         <div className={styles.menuItemsContainer}>
//           <Grid container>
//             {menuItems.map((item, index) => (
//               <React.Fragment key={index}>
//                 <Grid
//                   item
//                   sm={12}
//                   xs={12}
//                   className={styles.sideContaint}
//                   onClick={() => handleSectionClick(item.title)}
//                 >
//                   <Grid item sm={8} xs={8} className={styles.ItemTitle}>
//                     {item.title}
//                   </Grid>
//                   <Grid item sm={4} xs={4} className={styles.arrowContainer}>
//                     <FaAngleDown
//                       className={
//                         activeSection === item.title
//                           ? styles.rotate
//                           : styles.noRotate
//                       }
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid
//                   item
//                   sm={12}
//                   xs={12}
//                   className={`${styles.subItemContainer} ${
//                     activeSection === item.title ? styles.open : ""
//                   }`}
//                   ref={(el) => (subMenuRefs.current[item.title] = el)}
//                   style={{
//                     maxHeight:
//                       activeSection === item.title
//                         ? `${subMenuHeights[item.title]}px`
//                         : "0px",
//                   }}
//                 >
//                   {item.subItems.map((subItem, subIndex) => (
//                     <div key={subIndex} className={styles.subItem}>
//                       {subItem}
//                     </div>
//                   ))}
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileViewNavBar;
