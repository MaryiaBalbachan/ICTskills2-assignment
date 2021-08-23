import React from "react";
//import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'




const TrendingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title='Top Rated Movies of All Times'
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
export default TrendingMoviesPage;
