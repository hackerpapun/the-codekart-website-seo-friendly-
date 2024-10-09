import React, { useState, useRef } from "react";
import styles from "../../../styles/NavbarStyles/mobileview.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Grid } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IMAGES } from "@/constants/images";
import Link from "next/link";
import { navconstants } from "@/constants/navconstants";

const menuItems = [
  {
    title: "What we do",
    hasDropdown: true,
    subItems: [
      { label: "Overview", link: "/what-we-do" },
      {
        title: "Industries",
        hasDropdown: true,
        subItems: [
          { label: "Healthcare", link: "/industries/healthcare" },
          { label: "Finance", link: "/industries/finance" },
          { label: "Retail", link: "/industries/retail" },
          { label: "Manufacturing", link: "/industries/manufacturing" },
          { label: "Automotive", link: "/industries/automotive" },
          { label: "Logistics", link: "/industries/logistics" },
          { label: "Real Estate", link: "/industries/realestate" },
          { label: "Education", link: "/industries/education" },
          { label: "Energy", link: "/industries/energy" },
        ],
      },
      {
        title: "Services",
        hasDropdown: true,
        subItems: [
          {
           label: "Web & App development",
            link: navconstants.webAndAppDevelopment,
          },
          {
           label: "Artificial Intelligence & Machine Learning",
            link: navconstants.AIandMachineLearning,
          },
          {
           label: "Resource Outsourcing",
            link: navconstants.resourceOutsourcing,
          },
          {
           label: "Quality Assurance & Testing",
            link: navconstants.qualityAssuranceAndTesting,
          },
          {
           label: "Custom Software Development",
            link: navconstants.customSoftwareDevelopment,
          },
          {
           label: "Cloud & Data Solutions",
            link: navconstants.cloudAndDataSolutions,
          },
          {
           label: "Generative AI",
            link: navconstants.geneartiveAI,
          },
          {
           label: "IoT & Digital Innovation",
            link: navconstants.iotAndDigitalInnovation,
          }
        ],
      },
    ],
  },
  {
    title: "Who we are",
    hasDropdown: true,
    subItems: [
      { label: "Overview", link: "/who-we-are" },
      {
        title: "About Us",
        hasDropdown: true,
        subItems: [
          { label: "Strength", link: navconstants.whoweare+"/#ourstrength" },
          { label: "Vision", link: navconstants.whoweare+"/#ourvision" },
        ],
      },
      {
        title: "Contact Us",
        hasDropdown: true,
        subItems: [
          { label: "FAQ", link: navconstants.whoweare+"/#Faq" },
          { label: "Get in Touch With Us", link: navconstants.whoweare+"/#contactus" },
        ],
      },
    ],
  },
  {
    title: "Insights",
    hasDropdown: true,
    subItems: [
      { label: "Overview", link: navconstants.insights },
      { label: "Career", link: navconstants.insights+"/#allOpenPositions" },
    ],
  },
];

const MobileViewNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [nestedActiveSections, setNestedActiveSections] = useState({});

  const subMenuRefs = useRef({});

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
      setNestedActiveSections({}); // Reset nested sections when parent closes
    } else {
      setActiveSection(section);
      setNestedActiveSections({}); // Reset nested sections when opening a new parent section
    }
  };

  const handleNestedClick = (parentSection, nestedSection) => {
    setNestedActiveSections((prevState) => ({
      ...prevState,
      [parentSection]: prevState[parentSection] === nestedSection ? null : nestedSection,
    }));
  };

  return (
    <>
      <Grid container className={styles.navbarContainer}>
        <Grid item sm={6} xs={6} className={styles.logoContainer}>
          <Link href="/"><img
            src={IMAGES.logo.codekartlogo}
            alt="CodeKart Logo"
            className={styles.NavbarLogo}
          />
          </Link>
        </Grid>
        <Grid
          item
          sm={6}
          xs={6}
          className={styles.menuContainer}
          onClick={handleToggleMenu}
        >
          <div className={`${styles.iconWrapper} ${isMenuOpen ? styles.open : ""}`}>
            <GiHamburgerMenu
              className={`${styles.icon} ${styles.hamburgerIcon}`}
            />
            <RxCross2 className={`${styles.icon} ${styles.crossIcon}`} />
          </div>
        </Grid>
      </Grid>

      <div className={`${styles.SideBarScreen} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.menuItemsContainer}>
          <Grid container>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {/* Parent Menu Section */}
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
                    {item.hasDropdown && (
                      <FaAngleDown
                        className={
                          activeSection === item.title
                            ? styles.rotate
                            : styles.noRotate
                        }
                      />
                    )}
                  </Grid>
                </Grid>

                {/* Submenu for the Parent Menu */}
                <Grid
                  item
                  sm={12}
                  xs={12}
                  className={`${styles.subItemContainer} ${activeSection === item.title ? styles.open : ""}`}
                  ref={(el) => (subMenuRefs.current[item.title] = el)}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <React.Fragment key={subIndex}>
                      {subItem.hasDropdown ? (
                        <>
                          {/* Nested Dropdown */}
                          <div
                            className={styles.subItem}
                            onClick={() =>
                              handleNestedClick(item.title, subItem.title)
                            }
                          >
                            {subItem.title}
                            <FaAngleDown
                              className={
                                nestedActiveSections[item.title] === subItem.title
                                  ? styles.rotate
                                  : styles.noRotate
                              }
                            />
                          </div>
                          {nestedActiveSections[item.title] === subItem.title && (
                            <div
                              className={`${styles.nestedSubItemContainer} ${styles.open}`}
                            >
                              {subItem.subItems.map((nestedSubItem, nestedIndex) => (
                                <Link
                                  className={styles.links}
                                  href={nestedSubItem.link}
                                  key={nestedIndex}
                                >
                                  <div className={styles.nestedSubItem}>
                                    {nestedSubItem.label}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        // Simple link item
                        <Link
                          className={styles.links}
                          href={subItem.link}
                          key={subIndex}
                        >
                          <div className={styles.subItem}>{subItem.label}</div>
                        </Link>
                      )}
                    </React.Fragment>
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
