import { Box } from "@mui/material";
import {
  WALLPAPER_SYMBOLS,
} from "../utils/constants";
import uuid from "react-uuid";
import VelocityScrollStrip from "../components/scroll-velocity-banner";


function Symbols() {
  let markup = [];

  for (const key in WALLPAPER_SYMBOLS) {
    markup.push(
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[64px]">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
            {WALLPAPER_SYMBOLS[key].Title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {WALLPAPER_SYMBOLS[key].Symbols.map((symbol) => {
            return (
              <div className="overflow-hidden bg-white rounded shadow"
                key={uuid()}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={symbol.Image}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-[#2772bc]">
                        {symbol.Title}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {symbol.Description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <Box className="pt-[94px]" />
      <VelocityScrollStrip text={"SYMBOLS GUIDE"} />
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 mt-[64px]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl cursor-default">
          {markup.map((section) => section)}
        </div>
      </section>

    </>
  );
}

export default Symbols;
