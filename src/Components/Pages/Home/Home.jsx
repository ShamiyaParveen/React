import React, { useState } from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'

const Home = () => {

const[category, setCotegory] = useState("All")

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCotegory={setCotegory} />
    </div>
  )
}

export default Home