import { useState } from 'react'
import uuid from "react-uuid";
import { Box } from "@mui/material";
import VelocityScrollStrip from "../components/scroll-velocity-banner";
import Tilty from "react-tilty";
import BooksFile from "../data/books.json";
import LaunchIcon from "@mui/icons-material/Launch";
import Book from "../components/flip-book/flip-book";
import Modal from '@mui/material/Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "95vw",
  height: "80vh",
  bgcolor: '#141414',
  border: '2px solid #111',
  boxShadow: 24,
  p: 2,
};

function SampleBooks() {
  const [open, setOpen] = useState(false);
  const handleOpen = (pdfURL) => {
    setOpen(pdfURL);
  }
  const handleClose = () => setOpen("");

  return (
    <>
      <Box
        style={{
          paddingTop: 94,
        }}
      />
      <VelocityScrollStrip text={"SAMPLE BOOKS"} />
      <section className="py-10 bg-gray-50 mt-[64px]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl cursor-default">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[64px]">
            <div className="grid grid-cols-1 gap-4 lg:mt-16 xl:gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {BooksFile.map((pdf) => {
                return (
                  <div
                    onClick={() => handleOpen(pdf.PDF)}
                    key={uuid()}
                  >
                    <Tilty
                      className="tilty"
                      glare
                      scale={1.05}
                      maxGlare={0.5}
                      max={10}
                      style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
                    >
                      <div className="overflow-hidden rounded bg-black shadow-2xl">
                        <div className="p-4">
                          <div className="flex items-center">
                            <LazyLoadImage
                              className="h-[300px] w-full object-contain bg-black"
                              src={`/pdf/thumbnails/${pdf.CoverImage}`}
                              loading="lazy"
                              threshold={500}
                              alt=""
                            />
                          </div>
                          <p className="leading-relaxed text-gray-400 hover:text-[#2772bc] text-sm flex items-center justify-between gap-2 pt-2">
                            click to view digital samples{" "}
                            <LaunchIcon style={{ fontSize: 15 }} />
                          </p>
                        </div>
                      </div>
                    </Tilty>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Book pdf={open} />
          </Box>
        </Modal>
      </section>
    </>
  );
}

export default SampleBooks;
