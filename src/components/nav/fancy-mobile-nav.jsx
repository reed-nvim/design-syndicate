import { useRef } from "react";
import { useMotionValue, motion } from "framer-motion";
import uuid from "react-uuid";
import { FiArrowRight } from "react-icons/fi";
import { LINKS } from "../../utils/constants";
import { Link } from "react-router-dom";

export const FancyMobileNav = (props) => {
  return (
    <section
      className="p-4"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "auto",
        display: 'flex',
        alignItems: "center"
      }}
    >
      <div className="mx-auto max-w-4xl w-full">
        {LINKS.map((link) => (
          <Link to={link.url}
            onClick={props.close}
            key={uuid()}
          >
            <LinkItem
              heading={link.navLabel ? link.navLabel : link.title}
              subheading={link.title}
              key={uuid()}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

const LinkItem = ({ heading, subheading }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-2 transition-colors duration-500 hover:border-neutral-500 md:py-5"
      style={{
        cursor: "pointer",
      }}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-500 md:text-2xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-350">
          {subheading}
        </span>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-4xl text-neutral-400" />
      </motion.div>
    </motion.span>
  );
};
