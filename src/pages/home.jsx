import { Box, Grid } from "@mui/material";
import uuid from "react-uuid";
import RANDOM_IMG_21 from "../img/random/img-21.jpeg";
import RANDOM_IMG_1 from "../img/random/A63202_web.jpg";

import RangeCard from "../components/range-card";
import SectionHeader from "../components/section-header";
import WallpaperButton from "../components/buttons/wallpaper-button";
import Banner from "../components/home/banner";
import FancyCarousel from "../components/fancy-carousel";
import { ImageTrailContainer } from "../components/image-trail-box";
import {
  FEATURED_PRODUCTS,
  RANGES,
} from "../utils/constants";
import FeaturedCollections from "../components/featured-collections";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
  const navigate = useNavigate();
  const minWidth900px = useMediaQuery('(min-width:900px)');

  return (
    <>
      <Banner />
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
          <Grid container spacing={6} style={{
            height: "100%",
          }}>
            <Grid item md={6}>
              <Box
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "0 10vw",
                  paddingRight: minWidth900px ? 0 : "10vw",
                }}
              >
                <Box
                  style={{
                    cursor: "default",
                    padding: "16px 16px",
                    color: "#4c4c4c",
                    position: "sticky",
                    top: 94,
                    left: 0,
                    zIndex: 10,
                  }}
                >

                  <SectionHeader title={"Elevate Your Space"} viewMore={false} />
                  <p style={{ marginTop: 10 }}>
                    Since celebrating our 46th birthday this year, Design
                    Syndicate has become Africa’s leading wallpaper supplier.
                    Our vast range of international premium quality wallpaper
                    collections create inspiration for all in the interior
                    design field.
                  </p>

                  <Box
                    style={{
                      display: "flex",
                      gap: 15,
                      marginTop: 65,
                    }}
                  >
                    <Link to={"/sample-books"}>
                      <WallpaperButton>Sample Books</WallpaperButton>
                    </Link>

                    <Link to={"/contact-us"}>
                      <WallpaperButton>Get In Touch</WallpaperButton>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box
                style={{
                  background: "#141414",
                  minHeight: "150px",
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url('${RANDOM_IMG_1}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="shadow-lg"
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        style={{
          position: "relative",
          padding: "0 10vw",
          cursor: "default",
          width: "100%",
          marginTop: 65,
        }}
      >
        <SectionHeader title={"Ranges"} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            {RANGES.map((range) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12} key={uuid()}>
                  <RangeCard range={range} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <FancyCarousel title="FEATURED PRODUCTS">
        {FEATURED_PRODUCTS.map(sku => {
          const prod = products.find(item => item.SKU === sku)
          return (
            <Box
              style={{
                position: "relative",
                maxHeight: 280,
                maxWidth: 280,
                height: '50vw',
                width: '50vw',
                overflow: "hidden",
                cursor: "pointer",
                color: "#fff",
              }}
              key={uuid()}
              onClick={() => navigate(`/p/${prod.SKU}`)}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  cursor: "default",
                  pointerEvents: "none",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={`/product-images/${prod.Images ? prod.Images[0] : ""}`}
              />

              <Box
                style={{
                  position: "absolute",
                  zIndex: 5,
                  background: "rgba(0,0,0,.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  fontWeight: 700,
                }}
              >
                {prod.SKU}
              </Box>
            </Box>
          );
        })}
      </FancyCarousel>

      <Box style={{ marginTop: 65, padding: "0 10vw 0 10vw", cursor: "default" }}>
        <Box>
          <Box
            style={{
              backgroundColor: "#fff",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw + 1rem, 5rem)",
              color: "rgba(225,225,225, .01)",
              backgroundRepeat: "repeat",
              backgroundImage: `url(${RANDOM_IMG_21})`,
              backgroundSize: "100px",
              backgroundAttachment: "fixed",
              textAlign: "center",
            }}
            className="clipped-banner-text"
          >
            LOVE YOUR WALLS
          </Box>
        </Box>
      </Box>

      <ImageTrailContainer />

      <Box
        style={{
          position: "relative",
          padding: "0 10vw",
          cursor: "default",
          width: "100%",
          marginTop: 65,
        }}
      >
        <SectionHeader title={"FEATURED COLLECTIONS"} />
        <FeaturedCollections />
      </Box>

      <Box style={{ height: 125 }} />
    </>
  );
}

export default Home;
