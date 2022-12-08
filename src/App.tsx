import React from 'react';
import {Routes, Route} from 'react-router-dom' 

import { Header } from './components/Header';
import { DetailsPage } from './pages/DetailsPage';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='details/:name' element={<DetailsPage />}/>
      </Routes>
    </>
  );
}
