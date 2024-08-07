import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, IconButton } from "@mui/material";
import RANDOM_IMG_1 from "../../img/random/A56103_M_web.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner = () => {
  const [clipElement, setClipElement] = useState(null);
  const maxWidth480px = useMediaQuery('(max-width:480px)');

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 90,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      style={{
        color: "#fff",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
      className="home-banner"
    >
      <Box
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#4c4c4c",
          backgroundImage: `url(${RANDOM_IMG_1})`,
          backgroundRepeat: 'repeat',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          filter: "brightness(80%)",
        }}
      />

      {/* clip */}
      <Box
        style={{
          height: "100%",
          width: "100%",
          background: `rgba(0,0,0,.6)`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          transition: "all .3s",
          clipPath: `circle(${maxWidth480px ? "45%" : "35% "} at ${maxWidth480px ? "50%" : "30% "} 50%)`,
        }}
        id="clip-banner"
        ref={setClipElement}
      />

      <Box
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <Box className="slide__caption" style={{ padding: `100px ${maxWidth480px ? "3vw" : "10vw"} 100px ${maxWidth480px ? "3vw" : "10vw"}` }}>
          <h2 className="slides__caption-headline">
            <span className="text-row text-row-1">
              <span className="animate__animated animate__fadeInUp">
                <strong>Design Syndicate</strong>
              </span>
            </span>

            <span className="text-row text-row-2">
              <span
                style={{ fontSize: "70%" }}
                className="animate__animated animate__fadeInUp animate__delay-1s"
              >
                <span style={{ fontSize: "70%" }}>Where</span>{" "}
                <em style={{ fontSize: "70%" }}>Walls </em>
                <span style={{ fontSize: "70%" }}>meet</span>
              </span>
            </span>
            <span className="text-row text-row-3">
              <span
                style={{ fontSize: "70%" }}
                className="animate__animated animate__fadeInUp animate__delay-2s"
              >
                <em style={{ fontSize: "70%" }}>Imagination.</em>
              </span>
            </span>
          </h2>
          <a
            className="slides__caption-link"
            href="#"
            style={{ opacity: 1 }}
            onMouseEnter={() => {
              clipElement.style.clipPath = "circle(40% at 30% 50%)";
            }}
            onMouseLeave={() => {
              clipElement.style.clipPath = "circle(35% at 30% 50%)";
            }}
            onClick={handleScrollDown}
          >
            <span className="animate__animated animate__bounceIn animate__delay-4s">
              Explore
            </span>
          </a>
        </Box>

        <Box
          style={{
            height: "100%",
            background: "100%",
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: 10,
              left: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              onMouseEnter={() => {
                clipElement.style.clipPath = "circle(45% at 35% 50%)";
              }}
              onMouseLeave={() => {
                clipElement.style.clipPath = "circle(35% at 30% 50%)";
              }}
              style={{
                padding: "16px 16px",
                cursor: "pointer",
              }}
              onClick={handleScrollDown}
              className="animate__animated animate__bounce animate__slow animate__delay-5s animate__infinite infinite"
            >
              <IconButton
                style={{ color: "#fff", border: "1px dashed #fff" }}
                variant="outlined"
              >
                <ArrowDownwardIcon style={{ fontSize: 12 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
