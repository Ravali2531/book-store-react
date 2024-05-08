import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'

const Home = () => {
  return (
    <div>
      <Banner />
      <FavouriteBooks />
      <FavBook />
      <PromoBanner/>
      <OtherBooks />
    </div>
  )
}

export default Home