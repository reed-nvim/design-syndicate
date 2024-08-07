import { Box, Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SectionHeader = ({ title, offsetPadding, viewMore }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: offsetPadding ? "0 10vw 0 0" : 0,
        marginBottom: 15,
        color: "#4c4c4c",
      }}
    >
      <span className="headline-title">{title}</span>
      {viewMore && (
        <Button
          size="small"
          variant="text"
          style={{ fontSize: 10, color: "#4c4c4cb3" }}
          endIcon={<ArrowForwardIosIcon style={{ fontSize: 13 }} />}
        >
          view more
        </Button>
      )}
    </Box>
  );
};

export default SectionHeader;
