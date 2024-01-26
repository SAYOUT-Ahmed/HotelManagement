import React from 'react'
import HeaderMain from "../layout/HeaderMain.jsx";
import HotelServices from "../common/HotelServices.jsx";
import Parallax from "../common/Parallax.jsx";
import RoomCarousel from "../common/RoomCarousel.jsx";

const Home = () => {
  return (
    <section>
        <HeaderMain/>
        <section className={'container'}>
            <RoomCarousel/>
            <Parallax/>
            <RoomCarousel/>
            <HotelServices/>
            <Parallax/>
            <RoomCarousel/>
        </section>
    </section>
  )
}

export default Home