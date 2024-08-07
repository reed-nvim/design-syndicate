import STANDARD_RANGE_COVER from "../img/ranges/standard.jpeg";
import SPECIAL_RANGE_COVER from "../img/ranges/special.jpeg";
import VINYL_RANGE_COVER from "../img/ranges/vinyls.jpg";
import DIGITAL_WALLPAPERS_RANGE_COVER from "../img/ranges/digital.jpeg";

export const RANGES = [
  {
    title: "Standard Stock Ranges",
    cover: STANDARD_RANGE_COVER,
    description:
      "Our standard stock ranges are sourced by our team of dedicated design professionals. Carefully selected to reflect the latest in local and international design trends.",
    link: "/products?filter=collection:Standard Stock Ranges",
  },
  {
    title: "Special Imports",
    cover: SPECIAL_RANGE_COVER,
    description:
      "Sourced from the finest producers from around the world. We hold exclusive distribution rights to many of our special import ranges. Browse our collections online or contact a consultant in your area",
    link: "/products?filter=collection:Special Imports",
  },
  {
    title: "Vinyl Decals",
    cover: VINYL_RANGE_COVER,
    description:
      "Transform your walls with our range of vinyl wall stickers that allow you to decorate the affordable and easy way.",
  },
  {
    title: "Digital Wallpaper",
    cover: DIGITAL_WALLPAPERS_RANGE_COVER,
    description:
      "This product provides interior designers with a whole new world of wall art possibilities! We can work with you to create custom art based on concept, source photo or graphic material.",
    link: "https://www.designsyndicate.co.za/digital-wallpaper/",
  },
];

export const FEATURED_PRODUCTS = [
  "ELMN3608",
  "BAPP3204",
  "BAOS6001-MURAL",
  "SDKC008",
  "ELTM3008",
  "ELA63201",
  "ELMN3110"
];

export const FEATURED_COLLECTIONS = [
  {
    Category: "Elemental",
    Cover: "ELA63602",
    Link: `/products?filter=collection:${encodeURIComponent("Elemental")}`
  },
  {
    Category: "Ash, Lava & Ash",
    Cover: "LASH1911",
    Link: `/products?filter=collection:${encodeURIComponent("Ash, Lava & Ash")}`
  },
  {
    Category: "Baruch",
    Cover: "SWPP3903",
    Link: `/products?filter=collection:${encodeURIComponent("Baruch")}`
  },
  {
    Category: "Chase",
    Cover: "CHA001",
    Link: `/products?filter=collection:${encodeURIComponent("Chase")}`
  },
  {
    Category: "Cork",
    Cover: "D4W1013",
    Link: `/products?filter=collection:${encodeURIComponent("Cork")}`
  },
];

export const LINKS = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    navLabel: "About-Us",
    url: "/about-us",
  },
  {
    title: "Products",
    navLabel: "Products",
    url: "/products",
  },
  {
    title: "Sample Books",
    navLabel: "Sample-Books",
    url: "/sample-books",
  },
  {
    title: "Wallpaper Symbol Guide",
    navLabel: "Wallpaper-Symbol-Guide",
    url: "/symbols-guide",
  },
  {
    title: "Our Branches",
    navLabel: "Our-Branches",
    url: "/branches",
  },
  {
    title: "Contact Us",
    navLabel: "Contact-Us",
    url: "/contact-us",
  }
];

export const WALLPAPER_SYMBOLS = {
  PatternSymbols: {
    Title: "Pattern Symbols",
    Symbols: [
      {
        Title: "Free Match",
        Image: "/pattern-symbols/free-match.png",
        Description:
          "The wallpaper has no repeating pattern and can be hung in any direction without accounting for the design",
      },
      {
        Title: "Offset Match",
        Image: "/pattern-symbols/offset-match.png",
        Description:
          "Similar designs must always be shifted vertically. The measurement beside it indicates the vertical offset of the pattern.",
      },
      {
        Title: "Straight Match",
        Image: "/pattern-symbols/straight-match.png",
        Description:
          "Similar designs must be matched at the same height. Its measurement number indicates the height at which the pattern is repeated.",
      },
      {
        Title: "Inverted",
        Image: "/pattern-symbols/inverted.png",
        Description:
          "Every second strip of wallpaper must be glued in the opposite direction.",
      },
    ],
  },
  GluingSymbols: {
    Title: "Gluing Symbols",
    Symbols: [
      {
        Title: "Glue to wall",
        Image: "/pattern-symbols/glue-to-wall.png",
        Description: "Apply glue/paste to wall, not to the paper.",
      },
      {
        Title: "Glue to paper",
        Image: "/pattern-symbols/glue-to-paper.png",
        Description: "Apply glue/paste to paper, not to the wall.",
      },
    ],
  },
  WaterResistanceAndWashability: {
    Title: "Water Resistance and Washability",
    Symbols: [
      {
        Title: "Spongeable",
        Image: "/pattern-symbols/spongable.png",
        Description:
          "Wallpaper can be lightly cleaned with a sponge. This wallpaper will be damaged when exposed to water.",
      },
      {
        Title: "Washable",
        Image: "/pattern-symbols/washable.png",
        Description:
          "Wallpaper is fairly durable and can be gently cleaned with a damp sponge. Vulnerable to large amounts of water.",
      },
      {
        Title: "Extra washable",
        Image: "/pattern-symbols/extra-washable.png",
        Description:
          "Wallpaper is durable and dirt can be removed with a light soap solution and a sponge. Vulnerable to large amounts of water.",
      },
      {
        Title: "Scrubbable",
        Image: "/pattern-symbols/scrubbable.png",
        Description:
          "This wallpaper is the most durable and can be scrubbed clean with a soft brush/mild abrasive without damage.",
      },
    ],
  },
  ColourFastness: {
    Title: "Colour Fastness",
    Symbols: [
      {
        Title: "Good light resistance",
        Image: "/pattern-symbols/good-light-resistance.png",
        Description:
          "This wallpaper will not fade easily with prolonged exposure to sunlight. Recommended for areas in bright sunlight.",
      },
    ],
  },
  WallpaperRemoval: {
    Title: "Wallpaper Removal",
    Symbols: [
      {
        Title: "Strippable",
        Image: "/pattern-symbols/strippable.png",
        Description:
          "The wallpaper can be removed dry from the wall without leaving any residue.",
      },
      {
        Title: "Peelable",
        Image: "/pattern-symbols/peelable.png",
        Description:
          "The top layer of this wallcovering will peel off dry, the bottom layer remains on the wall.",
      },
      {
        Title: "Wet removable",
        Image: "/pattern-symbols/wet-removable.png",
        Description:
          "Wallpaper can be removed using a putty knife after being soaked in water and wallpaper remover.",
      },
    ],
  },
};
