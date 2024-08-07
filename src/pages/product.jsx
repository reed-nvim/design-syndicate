import { Box, Tooltip, IconButton } from "@mui/material";
import ProductsFile from "../data/products.json";
import { useEffect, useState } from "react";
import {
  useParams,
  Link
} from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import uuid from "react-uuid";
import FancyCarousel from "../components/fancy-carousel";
import WallpaperButton from "../components/buttons/wallpaper-button";

function Product() {
  const { id } = useParams();
  const [colors, setColors] = useState({});
  const product = ProductsFile.find((p) => p.SKU == id);
  const related = ProductsFile.filter( //finding related products
    (p) => p.SKU !== id && p.Style && p.Style == product.Style
  );

  useEffect(() => {
    let cols = {};

    Object.keys(product.Colors).forEach((key) => {
      cols[key] = product.Colors[key];
    });

    setColors(cols);
  }, []);

  return (
    <>
      <div
        className="bg-gray-100"
        style={{
          height: "100%",
          width: "100%",
          paddingRight: "10vw",
          paddingLeft: "10vw",
        }}
      >
        <div className="pt-6">
          <nav
            aria-label="Breadcrumb"
            className="p-10 pl-0 pr-0 pb-0 pt-[114px]"
          >
            <ol role="list" className="mx-auto flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link
                    to={"/products"}
                    className="mr-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                  >
                    Products
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              {product.ParentCategories.map((breadcrumb) => (
                <li key={breadcrumb}>
                  <div className="flex items-center">
                    <Link
                      to={`/products?filter=collection:${(breadcrumb)}`}
                      className="mr-2 text-sm font-medium text-gray-900 hover:text-blue-500"
                    >
                      {breadcrumb}
                    </Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 cursor-default"
                >
                  {product.SKU.toUpperCase()}
                </a>
              </li>
            </ol>
          </nav>

          <CarouselProvider
            naturalSlideWidth={500}
            totalSlides={product.Images.length}
            infinite={true}
            isIntrinsicHeight={true}
          >
            <div className="mx-auto w-full p-10 pl-0 pr-0">
              <div className="flex gap-4">
                <div
                  className="flex flex-2 bg-white w-full"
                  style={{
                    boxShadow:
                      "0 3px 3px 0 rgba(77,77,79,0.08),0 0 3px 0 rgba(77,77,79,0.16)",
                  }}
                >
                  <div className="flex-1 p-5 pt-5 pb-5 border border-gray-100 relative">
                    <Slider>
                      {product.Images.map((img, i) => {
                        return (
                          <Slide index={i} key={uuid()}>
                            <img
                              src={`/product-images/${img}`}
                              alt={`/product-images/${img}`}
                              className="w-full h-[650px] object-cover object-center border border-gray-300"
                            />
                          </Slide>
                        );
                      })}
                    </Slider>

                    <Box
                      className="flex gap-2 overflow-hidden absolute left-10 bottom-10 bg-white p-2 shadow-2xl
                    animate__animated animate__bounceIn animate__delay-1s
                    "
                    >
                      {product.Images[0] && (
                        <ButtonBack>
                          {" "}
                          <img
                            src={`/product-images/${product.Images[0]}`}
                            alt={`/product-images/${product.Images[0]}`}
                            style={{
                              height: 150,
                              width: 110,
                            }}
                            className="h-[100px] w-[100px] object-cover object-center border border-gray-300"
                          />
                        </ButtonBack>
                      )}

                      {product.Images[1] && (
                        <ButtonNext>
                          {" "}
                          <img
                            src={`/product-images/${product.Images[1]}`}
                            alt={`/product-images/${product.Images[1]}`}
                            style={{
                              background: "green",
                              height: 150,
                              width: 110,
                            }}
                            className="h-[100px] w-[100px] object-cover object-center"
                          />
                        </ButtonNext>
                      )}
                    </Box>
                  </div>

                  <div className="flex-1 p-5 pt-10 pb-10 border border-gray-100">
                    <div className="border-b pb-5">
                      <h2 className="font-bold cursor-default text-xl text-gray-900">
                        Description
                      </h2>

                      <div className="mt-2 space-y-6">
                        <p className="text-base text-gray-900 cursor-default">
                          {" "}
                          {product.Description}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full gap-10">
                      <div className="mt-5">
                        <h2 className="font-bold cursor-default text-xl text-gray-500">
                          SKU
                        </h2>

                        <div className="mt-2 space-y-6">
                          <p className="text-sm text-gray-600 cursor-default">
                            {product.SKU}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <h2 className="font-bold cursor-default text-xl text-gray-500">
                          Style
                        </h2>

                        <div className="mt-2 space-y-6">
                          <p className="text-sm text-gray-600 cursor-default">
                            {product.Style}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full gap-10">
                      <div className="mt-10">
                        <h2 className="font-bold cursor-default text-xl text-gray-500">
                          Category
                        </h2>

                        <div className="mt-2 space-y-6">
                          <p className="text-sm text-gray-600 cursor-default">
                            {product.Category}
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h2 className="font-bold cursor-default text-xl text-gray-500">
                          Roll Size
                        </h2>

                        <div className="mt-2 space-y-6">
                          <p className="text-sm text-gray-600 cursor-default">
                            {product.RollSize}
                          </p>
                        </div>
                      </div>
                    </div>

                    {Boolean([...Object.keys(colors).sort()].length) && (
                      <div className="mt-10">
                        <h2 className="font-bold cursor-default text-xl text-gray-500">
                          Color
                        </h2>

                        <div className="mt-2 space-y-6">
                          <div className="flex gap-3">
                            {[...Object.keys(colors).sort()].map((col) => {
                              return (
                                <Tooltip arrow title={col} color="primary" key={uuid()}>
                                  <Link to={`/products?filter=color:${col}`}>
                                    <IconButton
                                      key={uuid()}
                                      style={{
                                        border: `1px rgba(0,0,0,.2) solid`,
                                        padding: 2,
                                      }}
                                      className="border border-gray-500 shadow-sm active:scale-95"
                                    >
                                      <span
                                        style={{
                                          height: 18,
                                          width: 18,
                                          borderRadius: "50%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <span
                                          style={{
                                            height: "100%",
                                            width: "100%",
                                            background: colors[col],
                                            display: "flex",
                                            borderRadius: "50%",
                                            opacity: 0.8,
                                          }}
                                        ></span>
                                      </span>
                                    </IconButton>
                                  </Link>
                                </Tooltip>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>

      {Boolean(related.length) && (
        <FancyCarousel title="RELATED PRODUCTS">
          {related.map((p) => {
            return (
              <Link to={`/p/${p.SKU}`} key={uuid()}>
                <Box
                  style={{
                    position: "relative",
                    height: 300,
                    width: 300,
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  key={uuid()}
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
                    src={`/product-images/${p.Images[0]}`}
                  />

                  <Box
                    style={{
                      position: "absolute",
                      zIndex: 5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    className="p-10"
                  >
                    <div className="shadow-2xl">
                      <WallpaperButton>{p.Category}</WallpaperButton>
                    </div>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </FancyCarousel>
      )}
      <Box style={{ height: 125 }} />
    </>
  );
}

export default Product;
