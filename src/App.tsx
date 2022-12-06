import React from 'react';
import {Routes, Route} from 'react-router-dom' 

import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  );
}
