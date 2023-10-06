import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MovieCard from "../movieCard/MovieCard";
import Header from "../header/Header";

function Home() {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    async function getMovieList(page) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=56d94a0cdb1adcc9a7ba5533448786e4&page=${page}`);
        // const response = await axios.get(`${process.env.TMDB_REACT_APP_BASEURL}/movie/popular?api_key=${process.env.TMDB_APP_APIKEY}&page=${page}`);
        setPopularMovieList((prevList) => [...prevList, ...response.data.results]);
      } catch (error) {
        alert(error);
      }
    }
    getMovieList();
  });


  return (
    <>
      <Header />
      <Container>
        <Row className="mx-4 py-3">
          <Col xs={12} md={8}>
            <div className="">
              <h1 style={{ color: "red" }}>Populer Movie</h1>
            </div>
          </Col>

          <Col className="d-flex justify-content-end px-3" xs={6} md={4}>
            <div className="d-flex align-items-center ">
              <button type="button" >
                Load More 
              </button>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-wrap justify-content-center">
          {popularMovieList.map((movie, i) => (
            <MovieCard key={i} poster={movie.poster_path} to={`/detail/${movie.id}`} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
