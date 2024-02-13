import React from 'react';
import './search-form.css';

function SearchForm() {

  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__input-container'>
          <input
            name='film'
            type='text'
            placeholder='Фильм'
            className='search-form__input'
          />
          <laebel className='search-form__icon' />
          <button
            type='submit'
            className='search-form__button'
          />
        </div>
        <div className='search-form__input-container search-form__input-container_type_checkbox'>
          <input
            id='short-films-checkbox'
            name='short-films'
            type='checkbox'
            className='search-form__checkbox'
          />
          <label htmlFor='short-films-checkbox' className='search-form__text'>
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm
