import React from "react";
import Logo from '../../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import './navigation.css';

function Navigation({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <div className='navigation__list_left'>
          <img className='navigation__logo' src={Logo} onClick={() => navigate('/')} />
          {
            isLoggedIn && (
              <>
                <li className='navigation__list_item'>
                  <Link
                    to={'/movies'}
                    className='navigation__link'
                  >
                    Фильмы
                  </Link>
                </li>
                <li className='navigation__list_item'>
                  <Link
                    to={'/saved-movies'}
                    className='navigation__link'
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </>
            )
          }
        </div>
        <div className='navigation__list_right'>
          {
            isLoggedIn
              ? (
                <li className='navigation__list_item'>
                  <Link
                    to={'/profile'}
                    className='navigation__link'
                  >
                    <div className='navigation__link_wrapper'>
                      <h2 className='navigation__text'>Аккаунт</h2>
                      <div className='navigation__account-logo'></div>
                    </div>
                  </Link>
                </li>
              )
              : (
                <div className='navigation__list_wrapper navigation__list_wrapper_not-authed'>
                  <li className='navigation__list_item'>
                    <Link
                      to={'/sign-up'}
                      className='navigation__link navigation__link_signup'
                    >
                      Регистрация
                    </Link>
                  </li>
                  <li className='navigation__list_item'>
                    <Link
                      to={'/sign-in'}
                      className='navigation__link navigation__link_signin'
                    >
                      Войти
                    </Link>
                  </li>
                </div>
              )
          }
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
