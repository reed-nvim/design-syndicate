import { Box, Grid, useMediaQuery } from "@mui/material";
import VelocityScrollStrip from "../components/scroll-velocity-banner";
import AboutUsBanner from "../components/about-us-banner";
import WallpaperButton from "../components/buttons/wallpaper-button";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import RANDOM_IMG_21 from "../img/random/A63301_A62903_M_web.jpg";
import RANDOM_IMG_1 from "../img/random/MN2014_M_web.jpg";

import COMPANY_LOGO_1 from "../img/companies/african-bank.svg";
import COMPANY_LOGO_2 from "../img/companies/liberty.png";
import COMPANY_LOGO_3 from "../img/companies/mtn.svg";
import COMPANY_LOGO_4 from "../img/companies/nestle.png";
import COMPANY_LOGO_5 from "../img/companies/PwC.svg";
import COMPANY_LOGO_6 from "../img/companies/southern-sun-logo.png";
import COMPANY_LOGO_7 from "../img/companies/std-bank.svg";
import COMPANY_LOGO_8 from "../img/companies/tiger.png";

function AboutUs() {
  const minWidth970px = useMediaQuery('(min-width:970px)');
  return (
    <>
      <Box
        style={{
          paddingTop: 94,
        }}
      >
        <Box style={{
          height: "30vh",
          backgroundColor: "#4c4c4c",
          backgroundImage: `url(${RANDOM_IMG_21})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }} />

        <VelocityScrollStrip text={"WHO WE ARE"} />
        <AboutUsBanner />

        <Box
          style={{
            cursor: "default",
            width: "100%",
            marginTop: 65,
          }}
        >
          <Box
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
            }}
          >
            <Grid container spacing={6} style={{ height: "100%" }}>
              <Grid item md={6} xs={12}>
                <Box
                  style={{
                    height: "100%",
                    minHeight: "200px",
                    with: "100%",
                    backgroundColor: '#4c4c4c',
                    backgroundImage: `url('${RANDOM_IMG_1}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: '1rem 0'
                  }}
                  className="shadow-lg"
                ></Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box
                  style={{
                    height: "100%",
                    with: "100%",
                    padding: "0 10vw",
                    paddingLeft: minWidth970px ? "0" : "10vw",
                  }}
                >
                  <Box
                    style={{
                      cursor: "default",
                      padding: "16px 16px",
                      color: "#4c4c4c",
                      top: 94,
                      left: 0,
                      zIndex: 10,
                    }}
                  >
                    <section className="w-full">
                      <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        Our experienced installation teams take the hassle out
                        of any decoration project.
                      </p>

                      <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        With Design Syndicate’s wall coverings adorning the
                        inside of spectacular spaces as far as Egypt, Zanzibar,
                        Malawi, Botswana and so forth, it is clear that our
                        trusted reputation for quality products and installation
                        expertise holds true.
                      </p>

                      <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
                        Our established international network of tested
                        wallpaper suppliers affords us the ability to furnish
                        you with the absolute best quality wallcoverings and the
                        most affordable prices.
                      </p>

                      <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        Give us a call or join us at our Wonderful Wallpaper
                        Warehouse to see our awe-inspiring collection for
                        yourself…
                      </p>

                      <Link to="/branches">
                        <WallpaperButton className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                          OUR BRANCHES
                      </WallpaperButton>
                      </Link>
                    </section>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          style={{ marginTop: 100, }}
        >
          <Box
            style={{
              background: "#555",
              padding: "2rem 0 6rem 0",
            }}
          >
            <section className="w-full px-8 max-w-6xl mx-auto">
              <p
                className="text-base md:text-lg text-slate-700 my-4 md:my-6 font-bold"
                style={{ color: "#fff" }}
              >
                In South Africa, our nationwide presence has enabled us to
                expand our portfolio of projects to include prestigious
                wallpaper installation projects that include:
              </p>
            </section>

            <Marquee>
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_1}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_2}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_3}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_4}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_5}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_6}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_7}
              />
              <img
                style={{
                  height: 50,
                  objectFit: "contain",
                  marginRight: 35,
                }}
                src={COMPANY_LOGO_8}
              />
            </Marquee>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
