import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'

const AboutUsBanner = () => {
  const [images, setImages] = useState([])
  const getFeaturedCollection = async () => {
    const res = await axios.get('./about-us-img-grid/index.json')
    const imgs = res.data.map((img, i) => {
      return {
        src: `./about-us-img-grid/imgs/${img}`,
        id: (i + 1)
      }
    })
    setImages(imgs)
  }

  useEffect(() => {
    getFeaturedCollection()
  }, [])

  return (
    <>
      <section
        className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        style={{ paddingBottom: 0 }}
      >
        <div>
          <p className="text-base md:text-lg text-slate-700 mb-4 md:mb-6">
            For four decades, Design Syndicate has been Africa’s total source of
            wallcoverings. From designer wallpaper encrusted with Swarovski
            crystals, to tough and hard-wearing coverings – we either stock it
            or we can source it for you.
                    </p>

          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            We pride ourselves in offering you a comprehensive interior
            decorating solution that spans from planning and sourcing the
            perfect wallcovering, to expertly installing the wallpaper of your
            choice.
                    </p>
        </div>
        {
          Boolean(images.length) && (
            <ShuffleGrid images={images} />
          )
        }
      </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (images) => {
  return shuffle(images).map((sq) => (
    <motion.img
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        objectFit: "cover"
      }}
      src={sq.src}
    />
  ));
};

const ShuffleGrid = ({ images }) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares(images));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(images));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AboutUsBanner;
