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
        <Route path='/Weather_App_Codica' element={<MainPage/>}/>
        <Route path='/Weather_App_Codica/details/:name' element={<DetailsPage />}/>
      </Routes>
    </>
  );
}
