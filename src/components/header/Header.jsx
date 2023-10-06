import React, { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import axios from "axios";
import "../../style/Navbar&Header.css";
import NavbarComponent from "../navigationBar/NavbarComponent";

function Header() {
  const [detailMovie1, setDetailMovie1] = useState({});
  const [detailMovie2, setDetailMovie2] = useState({});
  const [detailMovie3, setDetailMovie3] = useState({});
  const [detailMovie4, setDetailMovie4] = useState({});
  const [detailMovie5, setDetailMovie5] = useState({});
  const [detailMovie6, setDetailMovie6] = useState({});

  useEffect(() => {
    async function getDetailMovie() {
      try {
        const response1 = await axios.get(`https://api.themoviedb.org/3/movie/615656?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        const response2 = await axios.get(`https://api.themoviedb.org/3/movie/678512?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        const response3 = await axios.get(`https://api.themoviedb.org/3/movie/976573?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        const response4 = await axios.get(`https://api.themoviedb.org/3/movie/872585?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        const response5 = await axios.get(`https://api.themoviedb.org/3/movie/447365?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        const response6 = await axios.get(`https://api.themoviedb.org/3/movie/502356?api_key=56d94a0cdb1adcc9a7ba5533448786e4&language=en-US`);
        
        setDetailMovie1(response1.data);
        setDetailMovie2(response2.data);
        setDetailMovie3(response3.data);
        setDetailMovie4(response4.data);
        setDetailMovie5(response5.data);
        setDetailMovie6(response6.data);
      } catch (error) {
        alert(error);
      }
    }

    getDetailMovie();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Carousel>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie1?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie1?.title}</h2>
            <p className="Movie-caption-text">{detailMovie1?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie2?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie2?.title}</h2>
            <p className="Movie-caption-text">{detailMovie2?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie3?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie3?.title}</h2>
            <p className="Movie-caption-text">{detailMovie3?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie4?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie4?.title}</h2>
            <p className="Movie-caption-text">{detailMovie4?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item><Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie5?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie5?.title}</h2>
            <p className="Movie-caption-text">{detailMovie5?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item><Carousel.Item>
          <img className="Carousel-img d-block w-100 h-50" src={`https://image.tmdb.org/t/p/original${detailMovie6?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie6?.title}</h2>
            <p className="Movie-caption-text">{detailMovie6?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;
