import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarComponent from "../../components/navigationBar/NavbarComponent";
import { StarFill } from "react-bootstrap-icons";
import "../../style/Detailmovie.css";

function DetailMovie() {
  const [detailMovie, setDetailMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchDetailMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        // const response = await axios.get(`${process.env.TMDB_REACT_APP_BASEURL}/${params.id}?api_key=${process.env.TMDB_APP_APIKEY}&language=en-US`);
        setDetailMovie(response.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchDetailMovie();
  }, [params]);

  return (
    <>
      <NavbarComponent />
      <Container className="mb-5">
        <Row>
          <Col xl={5} xs={12} className="d-flex justify-content-center mt-4">
            <Card
              style={{
                width: "18rem",
                outlineStyle: "outset",
                outlineWidth: "thin",
              }}
            >
              <Card.Img src={`https://image.tmdb.org/t/p/original${detailMovie.poster_path}`} alt={`${detailMovie.title}`} />
            </Card>
          </Col>
          <Col xl={7} xs={12} className="mt-4">
            <Card>
              <h1>{detailMovie?.title}</h1>
            </Card>
            <Card>
              <p>
                {detailMovie?.genres &&
                  detailMovie?.genres?.length > 0 &&
                  detailMovie?.genres?.map((genre, i) => {
                    return i === detailMovie?.genres.length - 1 ? genre.name : `${genre.name}, `;
                  })}
              </p>
              <p className="justify">{detailMovie?.overview}</p>
              <p>
                <b>Popularitas</b> {detailMovie?.popularity} 
              </p>
              <p>
                <b>Tanggal Rilis:</b> {detailMovie?.release_date ? detailMovie.release_date : "-"}
              </p>
              <p className="fs-5">
                <StarFill className="mb-1 mx-1 text-warning" />
                {detailMovie?.vote_average ? detailMovie.vote_average.toFixed(2) : "-"}
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailMovie;
