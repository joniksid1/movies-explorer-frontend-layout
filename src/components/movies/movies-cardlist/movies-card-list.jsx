import React from 'react';
import './movies-card-list.css';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList() {

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </ul>
      <div className='movies-card-list__more'>
        <button className='movies-card-list__more-button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList
