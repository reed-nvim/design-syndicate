import { Box, Grid } from "@mui/material";
import RANDOM_IMG_21 from "../img/random/img-37.jpeg";
import VelocityScrollStrip from "../components/scroll-velocity-banner";
import { useMediaQuery } from "@mui/material";

function Branches() {
  const minWidth900px = useMediaQuery('(min-width:900px)');
  return (
    <>
      <Box
        style={{
          height: "30vh",
          minHeight: 300,
          backgroundColor: "#4c4c4c",
          backgroundImage: `url(${RANDOM_IMG_21})`,
          backgroundRepeat: "repeat",
        }}
      />

      <VelocityScrollStrip text={"OUR BRANCHES"} />

      <Box style={{ padding: "0 10vw" }}>
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
            <Grid container spacing={6}
              style={{
                height: "100%",
              }}>
              <Grid
                item
                md={6}
                xs={12}
                style={{
                  paddingTop: minWidth900px ? "48px" : 0
                }}
              >
                <Box
                  style={{
                    height: "100%",
                    with: "100%",
                    paddingRight: 0,
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
                    <h3 className="text-3xl md:text-4xl font-semibold">
                      Johannesburg
                    </h3>
                    <p style={{ marginTop: 10 }}>
                      <b>Tel : </b> +27 11 434 1330 <br />
                      <b>Fax : </b> +27 11 434 1678 <br />
                      <b>Email : </b> sales@desyn.co.za <br />
                      <b>Address : </b> 39 La Rochelle Road, Springfield, 2137{" "}
                      <br /> P.O. Box 57113, Springfield, 2190
                    </p>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <iframe
                  style={{
                    minHeight: "400px",
                    height: "100%",
                    width: "100%",
                    background: "#444",
                  }}
                  className="shadow-xl"
                  src="https://www.google.com/maps/d/embed?mid=1yQ3MlNuCYy7sEIrpsB5gHqKphNmQWnUU&hl=en&ehbc=2E312F"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

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
              {
                minWidth900px && (
                  <Grid item md={6} xs={12}>
                    <iframe
                      style={{
                        minHeight: "400px",
                        height: "100%",
                        width: "100%",
                        background: "#444",
                      }}
                      className="shadow-xl"
                      src="https://www.google.com/maps/d/embed?mid=1QzwQBGgtq4IKcXxggdFhSzZJ0wyPLNj_&ehbc=2E312F"
                    />
                  </Grid>
                )
              }

              <Grid item md={6} xs={12}>
                <Box
                  style={{
                    height: "100%",
                    with: "100%",
                    paddingRight: 0,
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
                    <h3 className="text-3xl md:text-4xl font-semibold">
                      Durban
                    </h3>
                    <p style={{ marginTop: 10 }}>
                      <b>Tel : </b> +27 82 555 8318 <br />
                      <b>Contact : </b> Brenda Mackay <br />
                      <b>Email : </b> brenda@desyn.co.za <br />
                      <b>Address : </b> Shop 15 Beacon Rock, 21 Lighthouse Road,
                      Umhlanga Rocks, 4139
                      <br />
                      P.O. Box 40736, Redhill, 4071
                    </p>
                  </Box>
                </Box>
              </Grid>
              {
                !minWidth900px && (
                  <Grid item md={6} xs={12}>
                    <iframe
                      style={{
                        minHeight: "400px",
                        height: "100%",
                        width: "100%",
                        background: "#444",
                      }}
                      className="shadow-xl"
                      src="https://www.google.com/maps/d/embed?mid=1QzwQBGgtq4IKcXxggdFhSzZJ0wyPLNj_&ehbc=2E312F"
                    />
                  </Grid>
                )
              }
            </Grid>
          </Box>
        </Box>

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
                    with: "100%",
                    paddingRight: 0,
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
                    <h3 className="text-3xl md:text-4xl font-semibold">
                      Western Cape
                    </h3>
                    <p style={{ marginTop: 10 }}>
                      <b>Tel : </b> +27 21 330 5516 <br />
                      <b>Email : </b> sales@desyn.co.za <br />
                      <b>Address : </b> Unit 56, Block A, Northgate Business
                      Park, Gold Street, Northgate Estate, Brooklyn, 7405
                    </p>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <iframe
                  style={{
                    minHeight: "400px",
                    height: "100%",
                    width: "100%",
                    background: "#444",
                  }}
                  src="https://www.google.com/maps/d/embed?mid=1j9fVRQPE8k9NZvQoNBNr4zZi349hUV4&ehbc=2E312F"
                  className="shadow-xl"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 125 }} />
    </>
  );
}

export default Branches;
