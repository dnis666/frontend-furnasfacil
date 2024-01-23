// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { DeviceProvider } from '../src/components/DeviceContext/DeviceContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';
import SearchHome from './components/SearchHome/SearchHome';
import AdvertisingTop from './components/AdvertisingTop/AdvertisingTop';
import TopRent from './components/TopRent/TopRent';
import AdvertisingMiddle from './components/AdvertisingMiddle/AdvertisingMiddle';
import BackToTheTop from './components/BackToTheTop/BackToTheTop';
import Showroom from './components/ShowRoom';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <DeviceProvider>
        <Header />
        <SearchHome />
        <AdvertisingTop />
        <TopRent />
        <AdvertisingMiddle />
        <Showroom />
        <Testimonials />
        <Footer />
        <BackToTheTop />
      </DeviceProvider>
    </>
  );
}

export default App;
