import React from "react";
import { motion } from "framer-motion";
import { FEATURED_COLLECTIONS } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import ProductsFile from "../data/products.json";

const FeaturedCollections = () => {
  const products = ProductsFile;
  let cols = []
  products.forEach(prod => cols = [...cols, ...prod.ParentCategories])
  const uniqueCollections = [...new Set(cols)]

  console.log(uniqueCollections)

  return (
    <section className="mx-auto py-4 text-slate-800">
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8" link={FEATURED_COLLECTIONS[0].Link}>
          <CardTitle>{FEATURED_COLLECTIONS[0].Category}</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] border border-gray-300 shadow-xl"
            style={{
              backgroundImage: `url(/product-images/${FEATURED_COLLECTIONS[0].Cover}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" link={FEATURED_COLLECTIONS[1].Link}>
          <CardTitle>{FEATURED_COLLECTIONS[1].Category}</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] border border-gray-300 shadow-xl"
            style={{
              backgroundImage: `url(/product-images/${FEATURED_COLLECTIONS[1].Cover}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4" link={FEATURED_COLLECTIONS[2].Link}>
          <CardTitle>{FEATURED_COLLECTIONS[2].Category}</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] border border-gray-300 shadow-xl"
            style={{
              backgroundImage: `url(/product-images/${FEATURED_COLLECTIONS[2].Cover}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4" link={FEATURED_COLLECTIONS[3].Link}>
          <CardTitle>{FEATURED_COLLECTIONS[3].Category}</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] border border-gray-300 shadow-xl"
            style={{
              backgroundImage: `url(/product-images/${FEATURED_COLLECTIONS[3].Cover}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" link={FEATURED_COLLECTIONS[4].Link}>
          <CardTitle>{FEATURED_COLLECTIONS[4].Category}</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] border border-gray-300 shadow-xl"
            style={{
              backgroundImage: `url(/product-images/${FEATURED_COLLECTIONS[4].Cover}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, link, children }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl  border p-8 ${className} shadow-sm`}
      onClick={() => navigate(link)}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold">{children}</h3>
  );
};

export default FeaturedCollections;
