// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'
import SearchHome from './components/SearchHome/SearchHome'
import AdvertisingTop from './components/AdvertisingTop/AdvertisingTop'
import TopRent from './components/TopRent/TopRent'
import AdvertisingMiddle from './components/AdvertisingMiddle/AdvertisingMiddle'

function App() {


  return (
    <>
     <Header />
      <SearchHome />
      <AdvertisingTop />
      <TopRent />
      <AdvertisingMiddle />
     <Footer />
    </>
  )
}

export default App
