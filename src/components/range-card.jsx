import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function RangeCard({ range }) {
  return (
    <Link
      to={range?.link}
      style={{ fontSize: 14, color: "#4c4c4cb3", paddingLeft: 0, cursor: range?.link ? 'pointer' : 'default' }}
      size="small"
      onClick={(e) => {
        if (!range.link) {
          e.preventDefault()
        }
      }}
    >
      <Card sx={{ minWidth: 210, flex: 1, borderRadius: 0, boxShadow: 0 }}>
        <CardMedia
          sx={{ minHeight: 240 }}
          image={range.cover}
          title={range.title}
          className="shadow-lg"
        />
        <CardContent
          style={{
            padding: "8px 0",
            transform: "translateZ(20px)",
          }}
        >
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className="fancy-headline-font-dark"
            style={{ fontSize: 24 }}
          >
            {range.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              fontSize: 13,
            }}
          >
            {range.description}
          </Typography>
        </CardContent>

        {range.link && (
          <CardActions style={{ padding: 0, transform: "translateZ(20px)" }}>
            <Link
              to={range.link}
              style={{ fontSize: 14, color: "#4c4c4cb3", paddingLeft: 0 }}
              size="small"
            >
              <span className="hover:text-blue-500">VIEW</span>
            </Link>
          </CardActions>
        )}
      </Card>
    </Link>
  );
}
