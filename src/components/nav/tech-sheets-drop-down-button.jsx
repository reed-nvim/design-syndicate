import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const TechnicalDataSheetDropDownButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-[4px] py-[5px] min-w-[64px] rounded-md hover:bg-[#1976d20b] transition-colors text-black opacity-[.8]"
      >
        <span className="font-medium text-xs">TECHNICAL DATA SHEETS</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <Option
          setOpen={setOpen}
          Icon={PictureAsPdfIcon}
          text="Matrix Textures 460gsm"
          link="https://www.designsyndicate.co.za/wp-content/library/data-sheets/Matrix-Textures-460gsm.pdf"
        />
        <Option
          setOpen={setOpen}
          Icon={PictureAsPdfIcon}
          text="Murek DS Graphite P7109"
          link="https://www.designsyndicate.co.za/wp-content/library/data-sheets/Murek%20DS%20Graphite%20P7109%20-%20Technical%20Data%20Sheet.pdf"
        />
        <Option
          setOpen={setOpen}
          Icon={PictureAsPdfIcon}
          text="Murek DS Linen P4490"
          link="https://www.designsyndicate.co.za/wp-content/library/data-sheets/Murek%20DS%20Linen%20P4490%20-%20Technical%20Data%20Sheet.pdf"
        />
        <Option
          setOpen={setOpen}
          Icon={PictureAsPdfIcon}
          text="Murek DS Sandstone P8719"
          link="https://www.designsyndicate.co.za/wp-content/library/data-sheets/Murek%20DS%20Sandstone%20P8719%20-%20Technical%20Data%20Sheet.pdf"
        />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen, link }) => {
  return (
    <motion.li variants={itemVariants} onClick={() => setOpen(false)}>
      <Button
        href={link}
        target="_Blank"
        size="small"
        color="primary"
        className="flex items-center gap text-[10px] font-medium whitespace-nowrap rounded-md text-slate-700 transition-colors cursor-pointer"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "flex-start",
          color: "#000",
          fontSize: 10,
          opacity: ".8",
        }}
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </Button>
    </motion.li>
  );
};


const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default TechnicalDataSheetDropDownButton;
