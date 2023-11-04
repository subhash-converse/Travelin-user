import React from 'react'

// ............Components.................
import GridTitle from "../LeftTourGridPage/GridTitle"
import GridCard from "../LeftTourGridPage/GridCard"
import ExploreYourLife from '../LeftTourGridPage/ExploreYourLife'
import Patnersgrid from "../LeftTourGridPage/PatnersGrid"

const LeftTourGridLayout = () => {
  return (
    <>
    <div>
       <GridTitle/>
    </div>
    <div>
      <GridCard/>
    </div>
    <div>
      <ExploreYourLife/>
    </div>
    <div>
      <Patnersgrid/>
    </div>
    </>
  )
}

export default LeftTourGridLayout