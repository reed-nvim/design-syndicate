import React from 'react'
import SectionHeader from './section-header';
import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';

const FancyCarousel = ({ title, children, viewMore }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1.8,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Box style={{ marginTop: 65, padding: "0 0 0 10vw", cursor: "default" }}>
      <SectionHeader title={title} offsetPadding viewMore={viewMore} />
      <Box className="carousel-wrapper">
        <Carousel responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {children}
        </Carousel>
      </Box>
    </Box>

  )
}

export default FancyCarousel
