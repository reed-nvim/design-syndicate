import { Box, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import { LazyLoadImage } from "react-lazy-load-image-component";
import uuid from "react-uuid";
import { useMediaQuery } from "@mui/material";

const ProductThumbnailItem = ({ product }) => {
  const maxWidth640px = useMediaQuery('(max-width:640px)');

  return (
    <Link className="bg-white" to={`/p/${product.SKU}`}>
      <Box className="animate__animated animate__fadeIn">
        <Tilty
          className="tilty"
          glare
          scale={1.05}
          maxGlare={1.5}
          max={10}
          style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
        >
          <div className="relative flex items-end overflow-hidden shadow-lg hover:shadow-xl duration-200">
            <LazyLoadImage
              src={`/product-images/${product?.Images[0]}`}
              loading="lazy"
              style={{
                height: 400,
                width: "100%",
                objectFit: "cover",
                borderRadius: 5,
                background: "#4c4c4c"
              }}
              threshold={500}
            />
          </div>
        </Tilty>

        <div className="mt-1 p-3 relative">
          <span className="text-gray-700 text-sm">{product?.SKU}</span>
          <p className="mt-1 text-xs text-gray-400 text-[13px]">
            {" "}
            {product?.ParentCategories.map((cat, i) => (
              <React.Fragment key={uuid()}>
                {" "}
                <Link to={`/products?filter=collection:${btoa(cat)}`}>
                  <span
                    href={cat}
                    className="cursor-pointer hover:text-blue-500 active:text-blue-600"
                  >
                    {cat}
                  </span>
                </Link>
                {!i ? "  |  " : ""}
              </React.Fragment>
            ))}
          </p>
          <p className="mt-1 text-xs text-gray-500 text-[12px] truncate">
            {" "}
            {product?.Style}
          </p>

          <Box
            style={{
              height: 40,
              width: "100%",
              margin: "10px 0",
              gap: 8,
              display: "flex",
              alignItems: "center",
              cursor: "default",
            }}
          >
            {Object.keys(product.Colors).map((key) => {
              return (
                <Link to={`/products?filter=color:${key}`} key={uuid()}>
                  <IconButton
                    style={{
                      border: `1px rgba(0,0,0,.2) solid`,
                      padding: 2,
                    }}
                    size="small"
                    className="shadow-sm"
                    key={uuid()}
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
                          background: product.Colors[key],
                          display: "flex",
                          borderRadius: "50%",
                          opacity: 0.8,
                        }}
                      ></span>
                    </span>
                  </IconButton>
                </Link>
              );
            })}
          </Box>
        </div>
      </Box>
    </Link>
  );
};

export default ProductThumbnailItem;
