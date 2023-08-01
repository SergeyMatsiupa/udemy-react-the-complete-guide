import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchMoviesHandler = () => {
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (response.status !== 200) {
        console.log("response.status", response.status);
        throw new Error("Something went wrong!");
      }
      // .then((response) => response.json())
      const responseData = await response.json();
      // .then((responseData) => {
      // console.log('responseData.results', responseData.results);
      const transformedMovies = responseData.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });
      setFetchedMovies(transformedMovies);
      // }
      // );
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = "Found no movies";
  if (fetchedMovies.length > 0) {
    content = <MoviesList movies={fetchedMovies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* <MoviesList movies={dummyMovies} /> */}
        {/* {!error && !isLoading && fetchedMovies.length > 0 && (
          <MoviesList movies={fetchedMovies} />
        )} */}
        {/* {!isLoading && fetchedMovies.length === 0 && <p>Found no movies</p>} */}
        {/* {isLoading && <p>Loading...</p>} */}
        {/* {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
