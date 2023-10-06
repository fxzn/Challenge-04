import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ poster, to }) {
  return (
    <Card
      variant="outline-danger"
      as={Link}
      to={to}
      style={{
        width: "15rem",
        margin: "8px",
      }}
      className="Card-component mb-5"
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        // src={`${process.env.TMDB_REACT_APP_BASEIMGURL}/original${poster}`}
      />
    </Card>
  );
}

export default MovieCard;
