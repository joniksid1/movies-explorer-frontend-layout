import React from 'react';
import movie from '../../../images/test-card.png';
import './movies-card-list.css';

function MoviesCardList() {

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        <li className='movies-card-list__card'>
          <div className='movies-card-list__wrapper'>
            <h2 className='movies-card-list__title'>33 слова о дизайне</h2>
            <p className='movies-card-list__text'>1ч 47м</p>
            <button
              type='button'
              className='movies-card-list__button'
            />
            <img
              src={movie}
              className='movies-card-list__image'
            />
          </div>
        </li>
        <li className='movies-card-list__card'>
          <div className='movies-card-list__wrapper'>
            <h2 className='movies-card-list__title'>33 слова о дизайне</h2>
            <p className='movies-card-list__text'>1ч 47м</p>
            <button
              type='button'
              className='movies-card-list__button'
            />
            <img
              src={movie}
              className='movies-card-list__image'
            />
          </div>
        </li>
        <li className='movies-card-list__card'>
          <div className='movies-card-list__wrapper'>
            <h2 className='movies-card-list__title'>33 слова о дизайне</h2>
            <p className='movies-card-list__text'>1ч 47м</p>
            <button
              type='button'
              className='movies-card-list__button'
            />
            <img
              src={movie}
              className='movies-card-list__image'
            />
          </div>
        </li>
        <li className='movies-card-list__card'>
          <div className='movies-card-list__wrapper'>
            <h2 className='movies-card-list__title'>33 слова о дизайне</h2>
            <p className='movies-card-list__text'>1ч 47м</p>
            <button
              type='button'
              className='movies-card-list__button'
            />
            <img
              src={movie}
              className='movies-card-list__image'
            />
          </div>
        </li>
        <li className='movies-card-list__card'>
          <div className='movies-card-list__wrapper'>
            <h2 className='movies-card-list__title'>33 слова о дизайне</h2>
            <p className='movies-card-list__text'>1ч 47м</p>
            <button
              type='button'
              className='movies-card-list__button'
            />
            <img
              src={movie}
              className='movies-card-list__image'
            />
          </div>
        </li>
      </ul>
      <div className='movies-card-list__more'>
        <button className='movies-card-list__more-button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList
