import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { LINKS } from "../../utils/constants";
import LOGO_IMAGE from "../../img/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FancyMobileNav } from "./fancy-mobile-nav";
import TechnicalDataSheetDropDownButton from "./tech-sheets-drop-down-button";
import { motion } from "framer-motion";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

const Nav = () => {
  const minWidth970px = useMediaQuery('(min-width:970px)');
  const maxWidth480px = useMediaQuery('(max-width:480px)');
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%", zIndex: -1 },
  };

  return (
    <>
      <Box
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5000,
          background: "#fff",
          boxShadow:
            "0 0.5rem 1rem rgba(0,0,0,0.15), inset 0 -1px 0 rgba(255,255,255,0.15)",
        }}
      >
        <Box
          style={{
            width: "100%",
            background: "#141414",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 15 }}>
            {
              !maxWidth480px && (
                <>

                  <Button
                    size="small"
                    href="mailto:sales@desyn.co.za"
                    startIcon={<EmailIcon style={{ fontSize: 10 }} />}
                    style={{ color: "#fff", fontSize: 10 }}
                  >
                    sales@desyn.co.za
                </Button>
                  <Box
                    style={{
                      width: 1,
                      background: "rgba(225,225,225,.5)",
                      height: 10,
                    }}
                  />

                </>
              )
            }

            <Button
              size="small"
              href="tel:+27114341330"
              startIcon={<LocalPhoneIcon style={{ fontSize: 10 }} />}
              style={{ color: "#fff", fontSize: 10 }}
            >
              +27 11 434 1330
            </Button>
          </span>

          <span>
            <Box style={{ display: "flex", alignItems: "center", gap: 15 }}>
              <IconButton
                href="https://www.facebook.com/designsyndicatewallpaper/"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </IconButton>
              <Box
                style={{
                  width: 1,
                  background: "rgba(225,225,225,.5)",
                  height: 10,
                }}
              />
              <IconButton
                href="https://www.instagram.com/designsyndicatewallpaper"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </IconButton>
              <Box
                style={{
                  width: 1,
                  background: "rgba(225,225,225,.5)",
                  height: 10,
                }}
              />
              <IconButton
                href="https://www.tiktok.com/@designsyndicatewallpaper"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </IconButton>
            </Box>
          </span>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "8px 16px",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              src={LOGO_IMAGE}
              style={{
                height: 35,
                objectFit: "contain",
                objectPosition: "left",
              }}
            />
          </a>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >

            {minWidth970px && LINKS.map((link) => {
              if (link.title === "Technical Data Sheets") {
                return <TechnicalDataSheetDropDownButton key={uuid()} />;
              } else {
                return (
                  <Link to={link.url}>
                    <Button
                      size="small"
                      style={{ color: "#000", fontSize: 12, opacity: ".8" }}
                      key={uuid()}
                    >
                      {link.title}
                    </Button>
                  </Link>
                );
              }
            })}

            <IconButton
              size="small"
              style={{ color: "#000", fontSize: 12, opacity: ".8" }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", bounce: 0.5 }}
        style={{
          background: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10000,
        }}
      >
        <IconButton
          size="small"
          style={{
            fontSize: 10,
            opacity: ".8",
            color: "#fff",
            background: "#111",
            position: "fixed",
            zIndex: "10",
            top: 30,
            right: 16,
          }}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <CloseIcon />
        </IconButton>

        <FancyMobileNav close={() => setIsOpen(false)} />
      </motion.nav>
    </>
  );
};

export default Nav;
