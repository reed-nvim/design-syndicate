import { useState, useEffect } from 'react'
import { Box, IconButton } from "@mui/material";
import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "./hooks/route-change-top-scroller";
import Footer from "./components/footer/footer";

function AppContainer() {
  useScrollToTop(0);

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box
      style={{
        background: "#fff",
        width: "100%",
        postition: "relative",
      }}
    >
      <Nav />
      <Outlet />
      <Footer />

      <div className="scroll-to-top">
        {isVisible &&
          <IconButton onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 10
            }}
            className="shadow-2xl"
          >
            ↑
          </IconButton>
        }
      </div>
    </Box>
  );
}

export default AppContainer;
