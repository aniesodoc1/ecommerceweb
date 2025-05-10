import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"health"} heading={"Top's health drugs"}/>
      <HorizontalCardProduct category={"beauty"} heading={"Popular beauties"}/> 
      <VerticalCardProduct category={"fashion"}heading={"Popular fashion"} />
      <VerticalCardProduct category={"aphrodisiac"} heading={"aphrodisiac"}/>
      <VerticalCardProduct category={"sexualwellness"} heading={"Sexual Wellness"}/>
      </div>
  )
}

export default Home