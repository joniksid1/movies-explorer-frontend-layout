import React from 'react';
import './movies.css';
import SearchForm from './search-form/search-form';
import MoviesCardList from './movies-cardlist/movies-card-list';

function Movies() {

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
