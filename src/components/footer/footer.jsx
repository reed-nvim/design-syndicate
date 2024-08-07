import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import uuid from "react-uuid";

const Footer = () => {
  return (
    <>
      <Box
        style={{
          background: "#0000001a",
          padding: "3vw 5vw",
          border: '1px transparent solid',
          borderTop: "1px solid #3f3e40",
          with: '100%',
          overflow: 'hidden'

        }}
      >
        <Grid container spacing={4}>
          <Grid className="pr-4" item md={3} sm={6} xs={12} key={uuid()}>
            <SocialMediaInfoBox />
          </Grid>

          <Grid className="pr-4" item md={3} sm={6} xs={12} key={uuid()}>
            <ContactInfoBox />
          </Grid>

          <Grid className="pr-4" item md={3} sm={6} xs={12} key={uuid()}>
            <OfficeHoursInfoBox />
          </Grid>

          <Grid className="pr-4" item md={3} sm={6} xs={12} key={uuid()}>
            <AddressInfoBox />
          </Grid>
        </Grid>
      </Box>

      <Box
        style={{
          fontSize: 10,
          color: "#fff",
          background: "#0072bc",
          textAlign: "ceter",
          padding: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Copyright Design Syndicate. All rights
                reserved.
            </Box>
    </>
  );
};



const SocialMediaInfoBox = () => {
  return (
    <>
      <Box>
        <span
          className="fancy-headline-font-light"
          style={{ marginBottom: 10, fontSize: 23, color: "#3f3e40" }}
        >
          Follow Us:
        </span>

        <Box style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <IconButton
            href="https://www.facebook.com/designsyndicatewallpaper/"
            target="_blank"
            style={{ color: "#3f3e40" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </IconButton>

          <IconButton
            href="https://www.instagram.com/designsyndicatewallpaper"
            target="_blank"
            style={{ color: "#3f3e40" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </IconButton>

          <IconButton
            href="https://www.tiktok.com/@designsyndicatewallpaper"
            target="_blank"
            style={{ color: "#3f3e40" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

const ContactInfoBox = () => {
  return (
    <>
      <Box>
        <span
          className="fancy-headline-font-light"
          style={{ marginBottom: 10, fontSize: 23, color: "#3f3e40" }}
        >
          Contact
                </span>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Button
            size="small"
            href="mailto:sales@desyn.co.za"
            color="primary"
            startIcon={<EmailIcon style={{ fontSize: 13 }} />}
            style={{ color: "#3f3e40", fontSize: 13, marginBottom: 10 }}
          >
            sales@desyn.co.za
                    </Button>
          <Button
            size="small"
            href="tel:+270873591682"
            color="primary"
            startIcon={<LocalPhoneIcon style={{ fontSize: 13 }} />}
            style={{ color: "#3f3e40", fontSize: 13, marginBottom: 10 }}
          >
            +27 11 434 1330
          </Button>
        </Box>
      </Box>
    </>
  )
}


const OfficeHoursInfoBox = () => {
  return (
    <Box>
      <span
        className="fancy-headline-font-light"
        style={{ marginBottom: 10, fontSize: 23, color: "#3f3e40" }}
      >
        Office Hours
            </span>

      <Typography
        variant="body2"
        style={{ fontSize: 14, cursor: "default", opacity: 0.8 }}
      >
        Monday to Thursday
            </Typography>

      <Button
        size="small"
        color="primary"
        startIcon={<AccessTimeOutlinedIcon style={{ fontSize: 13 }} />}
        style={{
          color: "#3f3e40",
          fontSize: 13,
          marginBottom: 10,
          cursor: "default",
        }}
        disableRipple={true}
      >
        8:30am – 4:30pm
            </Button>

      <br />
      <Typography
        variant="body2"
        style={{ fontSize: 14, cursor: "default", opacity: 0.8 }}
      >
        Friday’s
            </Typography>

      <Button
        size="small"
        color="primary"
        startIcon={<AccessTimeOutlinedIcon style={{ fontSize: 13 }} />}
        style={{
          color: "#3f3e40",
          fontSize: 13,
          marginBottom: 10,
          cursor: "default",
        }}
        disableRipple={true}
      >
        8:30am – 4:00pm
            </Button>
    </Box>

  )
}

const AddressInfoBox = () => {
  return (

    <Box
      style={{
        height: "100%",
        width: "285px",
      }}
    >
      <Typography
        className="fancy-headline-font-light"
        style={{ marginBottom: 10, fontSize: 23, color: "#3f3e40" }}
      >
        Address
            </Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Button
          size="small"
          color="primary"
          startIcon={<BusinessOutlinedIcon style={{ fontSize: 13 }} />}
          style={{
            color: "#3f3e40",
            fontSize: 13,
            marginBottom: 10,
            cursor: "default",
            userSelect: "all",
          }}
          disableRipple={true}
        >
          39 La Rochelle Road.
                </Button>

        <Button
          size="small"
          color="primary"
          startIcon={
            <ArrowRightOutlinedIcon style={{ fontSize: 13 }} />
          }
          style={{
            color: "#3f3e40",
            fontSize: 13,
            marginBottom: 10,
            cursor: "default",
            userSelect: "all",
          }}
          disableRipple={true}
        >
          Springfield, 2137.
        </Button>

        <Button
          size="small"
          color="primary"
          startIcon={
            <ArrowRightOutlinedIcon style={{ fontSize: 13 }} />
          }
          style={{
            color: "#3f3e40",
            fontSize: 13,
            marginBottom: 10,
            cursor: "default",
            userSelect: "all",
          }}
          disableRipple={true}
        >
          Gauteng.
        </Button>
      </Box>
    </Box>
  )
}

export default Footer;
