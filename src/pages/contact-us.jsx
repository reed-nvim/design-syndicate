import { useState } from 'react'
import { Box, Grid, TextField, IconButton } from "@mui/material";
import VelocityScrollStrip from "../components/scroll-velocity-banner";
import WallpaperButton from "../components/buttons/wallpaper-button";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'; //tel
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'; //cell
import BusinessIcon from '@mui/icons-material/Business'; //address
import FaxIcon from '@mui/icons-material/Fax'; //fax
import EmailIcon from '@mui/icons-material/Email'; //email

import CircularProgress from '@mui/material/CircularProgress';

import { post } from 'aws-amplify/api';
import RANDOM_IMG_1 from "../img/img-7.jpg";

function Contact() {
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (data.AdmiralAckbar) {
      console.error("bot detected, aborting...")
      return
    }

    try {
      setLoading(true)
      const restOperation = post({
        apiName: 'api0e62c100',
        path: '/contact',
        options: {
          body: data
        }
      });

      const { body } = await restOperation.response;
      console.log('POST call succeeded');
    } catch (e) {
      console.log('POST call failed: ', e.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <Box className="pt-[94px]" />
      <VelocityScrollStrip text={"CONTACT US"} />
      <section className="py-10 bg-gray-200 mt-[24px]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[24px]">
          <div className="grid grid-cols-1 gap-6 mt-6 lg:mt-12 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white h-[85px] shadow">
              <div className="flex items-center ">
                <IconButton>
                  <LocalPhoneIcon className="text-[#2772bc]" />
                </IconButton>
                <div className="ml-5 mr-auto">
                  <p className="text-l font-semibold text-[#2772bc] cursor-default">
                    Tel : <span style={{ fontWeight: 100 }}>+27 11 434 1330</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white h-[85px] shadow">
              <div className="flex items-center ">
                <IconButton>
                  <PermPhoneMsgIcon className="text-[#2772bc]" />
                </IconButton>
                <div className="ml-5 mr-auto">
                  <p className="text-l font-semibold text-[#2772bc] cursor-default">
                    Cell : <span style={{ fontWeight: 100 }}>072 476 2824 <b>or</b> 076 383 9699</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white h-[85px] shadow">
              <div className="flex items-center ">
                <IconButton>
                  <FaxIcon className="text-[#2772bc]" />
                </IconButton>
                <div className="ml-5 mr-auto">
                  <p className="text-l font-semibold text-[#2772bc] cursor-default">
                    Fax : <span style={{ fontWeight: 100 }}>+27 11 434 1678</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white h-[85px] shadow">
              <div className="flex items-center ">
                <IconButton>
                  <EmailIcon className="text-[#2772bc]" />
                </IconButton>
                <div className="ml-5 mr-auto">
                  <p className="text-l font-semibold text-[#2772bc] cursor-default">
                    Email : <span style={{ fontWeight: 100 }}>sales@desyn.co.za</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white shadow">
              <div className="flex items-center">
                <IconButton >
                  <BusinessIcon className="text-[#2772bc]" />
                </IconButton>
                <div className="ml-5 mr-auto">
                  <p className="text-l font-semibold text-[#2772bc] cursor-default">
                    Address :
                  </p>
                </div>
              </div>

              <p className="text-l font-semibold text-[#2772bc]">
                <span style={{ fontWeight: 100, cursor: 'default' }}>
                  39 La Rochelle Road, Springfield, 2137 <br /> P.O. Box 57113, Springfield, 2190
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[64px]">
          <h2 className="pb-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl cursor-default">
            Contact Form
          </h2>

          <Box
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
            }}
            className="mt-8"
          >
            <Grid container spacing={3} style={{ height: "100%" }}>
              <Grid item md={6} xs={12}>
                <Box
                  style={{
                    minHeight: "150px",
                    height: "100%",
                    width: "100%",
                    background: `url('${RANDOM_IMG_1}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 5,
                    backgroundColor: "#444",
                  }}
                  className="shadow-xl mb-2"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Box
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingRight: 0,
                  }}
                >
                  <Box
                    style={{
                      cursor: "default",
                      color: "#4c4c4c",
                      position: "sticky",
                      top: 94,
                      left: 0,
                      zIndex: 10,
                    }}
                  >
                    <Box
                      component="form"
                      autoComplete="off"
                      className="flex flex-wrap items-center justify-between w-full gap-[2px]"
                      id="contact-us"
                      onSubmit={submit}
                    >

                      <Grid container spacing={3} style={{ height: "100%" }}>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="FirstName" label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="LastName" label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth name="Company" label="Company" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth name="Company" label="Company" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="Email" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="Tel" label="Telephone" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="Cell" label="Cell Phone" variant="outlined" />
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                          <TextField fullWidth required name="Query" label="Query Type" variant="outlined" />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                          <TextField
                            label=""
                            multiline
                            fullWidth
                            rows={4}
                            defaultValue=""
                            variant="outlined"
                            placeholder="Your Message"
                            name="Message"
                            style={{ display: 'block', width: '100%', marginBottom: "15px" }}
                          />
                        </Grid>
                        <TextField style={{ position: 'absolute', opacity: 0, zIndex: -10 }} fullWidth name="AdmiralAckbar" variant="outlined" />
                      </Grid>

                      <Box className="flex justify-end w-full" style={{ opacity: loading ? .7 : 1 }} >
                        <WallpaperButton submit={true} disabled={loading}> {loading ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span>Submit</span><CircularProgress size="14px" /></span> : "Submit"}  </WallpaperButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Box>


        </div>
      </section>
    </>
  );
}

export default Contact;
