import { useAnimate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import axios from 'axios'
import { Box } from "@mui/material";
import RANDOM_IMG_4 from "../img/random/MN3304_M_web.jpg";

export const ImageTrailContainer = () => {
  const [images, setImages] = useState([])

  const getFeaturedCollection = async () => {
    const res = await axios.get('./featured-collections-trail-imgs/index.json')
    const imgs = res.data.map(img => `./featured-collections-trail-imgs/imgs/${img}`)
    setImages(imgs)
  }

  useEffect(() => {
    getFeaturedCollection()
  }, [])

  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={images}
    >
      <section
        className="grid h-[75vh] w-full place-content-center bg-white"
        style={{
          marginTop: 65,
          cursor: "default",
          backgroundImage: `url(${RANDOM_IMG_4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: 'relative',
          backgroundAttachment: 'fixed',
          color: '#fff',
          fontWeight: 900,
          fontSize: "clamp(1rem, 2vw + 1rem, 5rem)",
        }}
      >

        <Box style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          background: 'rgba(0,0,0,.4)',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: "0 10vw",
        }}>
          Our established international network of tested wallpaper suppliers affords us the ability to furnish you with the absolute best quality wallcoverings and the most affordable prices.
        </Box>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
          imageIndex % 2
            ? `rotate(${rotation}deg)`
            : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
          imageIndex % 2
            ? `rotate(-${rotation}deg)`
            : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 2 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}

    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-38 w-auto rounded-xl bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
