import React from 'react'
import { Hero } from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import PurPolicy from '../components/PurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <PurPolicy/>
    <NewsLetterBox/>
    </div>
  )
}

export default Home