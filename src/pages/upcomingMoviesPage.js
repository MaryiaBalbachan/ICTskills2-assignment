import React from "react";
//import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  /*const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
*/

  const mustwatch = movies.filter(m => m.mustwatch)
  localStorage.setItem('mustwatch', JSON.stringify(mustwatch))

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToMustWatchIcon movie={movie} />
            <AddToFavoritesIcon movie={movie} />
          </>
        );
        
      }}
    />
  );
};
export default UpcomingMoviesPage;