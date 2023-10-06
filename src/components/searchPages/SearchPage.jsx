import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import "../../style/Cardmovie.css"
import MovieCard from "../movieCard/MovieCard";

function SearchPage() {
  const location = useLocation();
  const { query } = location.state;
  const [searchedMovieList, setSearchedMovieList] = useState({});
  const [resultName, setResultName] = useState("");

  useEffect(() => {
    async function searchMovie() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=56d94a0cdb1adcc9a7ba5533448786e4&query=${query}&page=1`);
        // const response = await axios.get(`${process.env.TMDB_REACT_APP_BASEURL}/search/movie?api_key=${process.env.TMDB_APP_APIKEY}&query=${query}&page=1`);
        setSearchedMovieList(response.data.results);
      } catch (error) {
        alert(error);
      }
    }
    setResultName(query);
    searchMovie();
  }, [query]);

  return (
    <>
      <Header />
      <Container>
        <h2 className="text-danger p-4">Result Found: {resultName}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {searchedMovieList.length > 0 && searchedMovieList.map((movie, i) => <MovieCard key={i} title={movie.title} poster={movie.poster_path} to={`/detail/${movie.id}`} />)}
        </div>
      </Container>
    </>
  );
}

export default SearchPage;
