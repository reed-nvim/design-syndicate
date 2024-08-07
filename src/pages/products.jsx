import { Box, Button, Chip } from "@mui/material";
import uuid from "react-uuid";

import TuneIcon from "@mui/icons-material/Tune";
import ProductsFile from "../data/products.json";
import ProductThumbnailItem from "../components/products/product-thumbnail-item";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import ReactPaginate from 'react-paginate';

import RANDOM_IMG_21 from "../img/bg-4.png";

const COLOR_FILTER_TYPE = "COLOR";
const COLLECTION_FILTER_TYPE = "COLLECTION";
const STYLE_FILTER_TYPE = "STYLE";
const SIZES_FILTER_TYPE = "SIZES";

function Products() {
  const minWidth620px = useMediaQuery('(min-width:620px)');
  const [filters, setFilters] = useState([]);
  const [openFilters, setOpenFilters] = useState(minWidth620px);
  const [filteredProducts, setFilteredProducts] = useState(ProductsFile);
  const location = useLocation();
  const search = location.search;
  const urlFilterChecked = useRef(false);
  const [filterOptions, setFilterOptions] = useState({
    Colors: {},
    Categories: [],
    RollSizes: [...new Set(ProductsFile.map((prod) => prod.RollSize))],
    Styles: [...new Set(ProductsFile.map((prod) => prod.Style))].sort(),
  });

  useEffect(() => {
    setOpenFilters(minWidth620px)
  }, [minWidth620px])

  useEffect(() => {
    let colors = {};
    let cats = []

    ProductsFile.forEach((prod) => {
      Object.keys(prod.Colors).forEach((key) => {
        colors[key] = prod.Colors[key];
      });
    });

    ProductsFile.forEach((prod) => {
      cats = [...cats, ...Object.values(prod.ParentCategories)];
    });

    setFilterOptions({
      ...filterOptions,
      Colors: colors,
      Categories: [...new Set(cats.map((col) => col))],
    });
  }, []);

  useEffect(() => {
    if (filters.length) {

      setFilteredProducts(
        ProductsFile.filter((prod) => {
          return Boolean(
            filters.filter((filter) => {
              return (
                filter.value === prod.RollSize ||
                filter.value === prod.Style ||
                prod.ParentCategories.includes(filter.value) ||
                Object.keys(prod.Colors).includes(filter.value)
              );
            }).length
          );
        })
      );
    } else {
      setFilteredProducts(ProductsFile);
    }

    if (
      (search && !urlFilterChecked.current) ||
      (search && search !== urlFilterChecked.current)
    ) {
      try {
        // decoding url string and removing the '?filter=' prefix
        console.log("search", search)
        console.log("decoded", decodeURIComponent(search).slice(8))
        const s = decodeURIComponent(search).slice(8);
        console.log("s", s)
        const urlFilters = s.split("|");
        console.log("urlFilters", urlFilters)
        const fils = [];

        urlFilters.forEach((fil) => {
          console.log("fil", fil);
          const type = fil.split(":")[0];
          console.log("type", type);
          const values = (fil.split(":")[1]);
          console.log("values", values);

          for (const value of values.split("|")) {
            fils.push({ type: type.toUpperCase(), value });
          }
        });

        setFilters(fils);
        urlFilterChecked.current = search;
      } catch (err) {
        console.error(err.message);
        setFilteredProducts(ProductsFile);
        urlFilterChecked.current = search;
      }
    }
  }, [filters, location]);

  const handleUpdateFilters = (fil) => {
    let updatedFilters = [];
    const exists = Boolean(
      filters.find(
        (filter) => filter.type == fil.type && filter.value == fil.value
      )
    );

    if (exists) {
      updatedFilters = filters.filter(
        (filter) => !(filter.type == fil.type && filter.value == fil.value)
      );
      setFilters(updatedFilters);
    } else {
      updatedFilters = [...filters, fil];
      setFilters(updatedFilters);
    }
  };

  const filterApplied = (fil) => {
    return Boolean(
      filters.find(
        (filter) => filter.type == fil.type && filter.value == fil.value
      )
    );
  };

  return (
    <>
      <Box
        style={{
          height: "30vh",
          minHeight: 300,
          backgroundColor: "#4c4c4c",
          backgroundImage: `url(${RANDOM_IMG_21})`,
          backgrounndSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: 'center'
        }}
        className="shadow-xl"
      />

      <Box className="flex justify-between items-center px-6 mb-2 mx-auto max-w-6xl mt-10">
        <Box className="text-sm text-gray-500 uppercase cursor-default">
          Products | {filteredProducts.length}
        </Box>

        <Button
          color="secondary"
          startIcon={
            <TuneIcon
              style={{ fontSize: 18, marginBottom: 2 }}
              color="action"
            />
          }
          endIcon={
            <Box
              style={{ fontSize: 11 }}
              className="flex justify-center items-center text-white bg-[#000] h-[22px] w-[22px] rounded-full opacity-80"
            >
              {filters.length}
            </Box>
          }
          className="text-gray-700"
          style={{
            color: "rgba(55, 65, 81, .8)",
            textTransform: "capitalize",
          }}
          onClick={() => setOpenFilters((prev) => !prev)}
        >
          Filters
        </Button>
      </Box>

      {openFilters && (
        <FilterComponent
          filters={filters}
          updateFilters={handleUpdateFilters}
          setFilters={setFilters}
          colors={filterOptions.Colors}
          styles={filterOptions.Styles}
          filterApplied={filterApplied}
          categories={filterOptions.Categories}
          rollSizes={filterOptions.RollSizes}
        />
      )}

      <Box
        style={{
          cursor: "default",
          width: "100%",
        }}
      />
      <PaginatedItems items={filteredProducts} filterOptions={filterOptions} itemsPerPage={25} />
      <Box style={{ height: 125 }} />
    </>
  );
}

function Items({ currentItems, filterOptions }) {
  return (
    <>
      {
        currentItems &&
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 pt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            currentItems.map((prod) => {
              return (
                <ProductThumbnailItem
                  key={uuid()}
                  product={prod}
                  colors={filterOptions.Colors}
                />
              )
            })
          }
        </div>
      }
    </>
  );
}


function PaginatedItems({ items, itemsPerPage, filterOptions }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    window.scrollTo({
      top: window.innerHeight * 0.2,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Items currentItems={currentItems} filterOptions={filterOptions} />
      <Box id="product-pagination-row">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </Box>
    </>
  );
}


const FilterComponent = ({
  filters,
  updateFilters,
  setFilters,
  colors,
  styles,
  filterApplied,
  categories,
  rollSizes,
}) => {
  return (
    <>
      {Boolean(filters.length) && (
        <Box className="flex flex-wrap gap-1 p-4 mx-auto max-w-6xl">
          {filters.map((filter) => {
            return (
              <Chip
                key={uuid()}
                style={{
                  background: "#337abf1a",
                  border: "1px #337abf1a solid",
                }}
                icon={
                  <Box
                    style={{
                      height: 13,
                      width: 13,
                      background: colors[filter.value],
                      borderRadius: "50%",
                      opacity: 0.8,
                    }}
                  />
                }
                label={filter.value}
                onDelete={() => {
                  updateFilters({
                    type: filter.type,
                    value: filter.value,
                  });
                }}
              />
            );
          })}

          <Box
            style={{
              borderWidth: "1px",
            }}
            className=" text-gray-500 text-sm border-gray-300 rounded-2xl px-[12px] py-1 cursor-pointer hover:bg-gray-50 active:bg-red-50 hover:text-red-400 hover:border-red-400"
            label={"Clear All"}
            onClick={() => {
              setFilters([]);
            }}
          >
            Remove All
          </Box>
        </Box>
      )}

      <Box
        style={{
          borderTop: "1px rgba(0,0,0,.05) solid",
        }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Box
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box className="text-gray-500 mb-2 cursor-default font-bold font-size-[10px] pb-2 border-b-2 border-gray-50 fancy-font">
            FILTER BY COLOUR
          </Box>

          <Box
            style={{
              width: "100%",
              height: "420px",
              overflow: "auto",
            }}
          >
            {[...Object.keys(colors).sort()].map((key) => (
              <span
                className={`gap-3 font-bold text-[13px] text-gray-500 p-1 mr-1 mb-1 inline-flex items-center justify-center cursor-pointer rounded-none hover:bg-slate-100 active:bg-slate-200 border-solid border-2 ${
                  filterApplied({
                    type: COLOR_FILTER_TYPE,
                    value: key,
                  })
                    ? "border-blue-300 bg-[#337abf12]"
                    : "border-gray-200"
                  } `}
                key={uuid()}
                onClick={() => {
                  updateFilters({
                    type: COLOR_FILTER_TYPE,
                    value: key,
                  });
                }}
              >
                <Box
                  style={{
                    height: 13,
                    width: 13,
                    background: colors[key],
                    borderRadius: "50%",
                    border: "1px rgba(0,0,0,.1) solid",
                    fontWeight: 700,
                    // opacity: 0.5,
                  }}
                />
                {key}
              </span>
            ))}
          </Box>
        </Box>

        <TextFilterGroup
          title={"FILTER BY STYLE"}
          type={STYLE_FILTER_TYPE}
          options={styles}
          updateFilters={updateFilters}
          filterApplied={filterApplied}
        />
        <TextFilterGroup
          title={"FILTER BY COLLECTION"}
          type={COLLECTION_FILTER_TYPE}
          options={categories}
          updateFilters={updateFilters}
          filterApplied={filterApplied}
        />
        <TextFilterGroup
          title={"FILTER BY ROLL SIZE"}
          type={SIZES_FILTER_TYPE}
          options={rollSizes}
          updateFilters={updateFilters}
          filterApplied={filterApplied}
        />
      </Box>
    </>
  );
};

const TextFilterGroup = ({
  title,
  type,
  options,
  updateFilters,
  filterApplied,
}) => {
  return (
    <Box
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="text-gray-500 mb-2 cursor-default font-bold font-size-[10px] pb-2 border-b-2 border-gray-50 fancy-font">
        {title}
      </Box>

      <Box
        style={{
          width: "100%",
          height: "420px",
          overflow: "auto",
        }}
        className="space-y-1"
      >
        {options.sort().map((val) => (
          <span
            className={`text-[13px] line-clamp-1 truncate cursor-pointer hover:text-blue-500 active:text-blue-600 relative ${
              filterApplied({
                type: type,
                value: val,
              })
                ? "text-blue-500"
                : "text-gray-600"
              }`}
            key={uuid()}
            onClick={() => {
              updateFilters({
                type: type,
                value: val,
              });
            }}
          >
            {val}

            {filterApplied({
              type: type,
              value: val,
            }) && (
                <span className="absolute right-0 text-[10px] lowercase">
                  &#10005;
                </span>
              )}
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
