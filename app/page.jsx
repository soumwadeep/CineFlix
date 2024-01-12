"use client";
import { useState } from "react";
import { Card, Modal } from "flowbite-react";
import moviesData from "@/components/MoviesData.json";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="px-12 justify-items-center sm:flex-auto sm:px-3 lg:grid lg:grid-cols-4 lg:gap-3 flex-col">
        {moviesData.map((movie, index) => (
          <Card
            key={index}
            className="cardcss mt-5 bg-inherit"
            imgAlt={movie.Title}
            imgSrc={movie.Poster}
          >
            <h5 className="text-base font-bold tracking-tighttext-white">
              {movie.Title}
            </h5>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              {movie.Genre} <b>.</b> <i className="fa-solid fa-star"></i>{" "}
              {movie.Rating} <b>.</b> {movie.Price}
            </p>
            <span className="flex flex-auto">
              <button className="btncss">
                <i className="fa-solid fa-cart-plus"></i> Add
              </button>
              <button
                className="btn-outline-css"
                onClick={() => openModal(movie)}
              >
                View Details
              </button>
            </span>
          </Card>
        ))}

        {selectedMovie && (
          <Modal
            className="drop-shadow-2xl"
            show={isModalOpen}
            onClose={closeModal}
          >
            <Modal.Header className="modalcss">
              <h3 className="text-white">{selectedMovie.Title}</h3>
            </Modal.Header>
            <Modal.Body className="modalcss">
              <Card
                className="max-w-sm modalcss"
                imgSrc={selectedMovie.Poster}
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-white">
                  {selectedMovie.Title}
                </h5>
                <p className="font-normal text-gray-400">
                  {selectedMovie.Year} . {selectedMovie.Duration}
                </p>
                <p className="font-normal text-gray-400">
                  {selectedMovie.Genre} <b>.</b>{" "}
                  <i className="fa-solid fa-star"></i> {selectedMovie.Rating}{" "}
                  <b>.</b> {selectedMovie.Price}
                </p>
                <hr />
                <p className="font-normal text-gray-400">
                  {selectedMovie.Description}
                </p>
              </Card>
              <button className="btncss mt-2" id="addbtn">
                <i className="fa-solid fa-cart-plus"></i> Add To Cart
              </button>
            </Modal.Body>
          </Modal>
        )}
      </div>
      {/* <center>
        <button className="btn-outline-css loadbtn disabled">Load More Movies</button>
      </center> */}
    </>
  );
};

export default Home;
