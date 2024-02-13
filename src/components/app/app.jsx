import React, { useRef, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './app.css';
import Header from '../header/header';
import Main from '../main/main';
import Movies from '../movies/movies';
import SavedMovies from '../saved-movies/saved-movies';
import Profile from '../profile/profile';
import Login from '../login/login';
import Register from '../register/register';
import Footer from '../footer/footer';

function App() {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/movies'} element={<Movies/>} />
        {/* <Route path={'/saved-movies'} element={<SavedMovies/>} /> */}
        {/* <Route path={'/profile'} element={<Profile/>} /> */}
        {/* <Route path={'/sign-in'} element={<Login/>} /> */}
        {/* <Route path={'/sign-up'} element={<Register/>} /> */}
      </Routes>
      {isLoggedIn && <Footer />}
    </>
  );
}

export default App
