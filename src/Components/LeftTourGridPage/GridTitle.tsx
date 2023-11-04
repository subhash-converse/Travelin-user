import React from 'react'

// ..............Images.................
import mountain from "../../Assets/Images/HomeImage/mountain.png"

const GridTitle = () => {
  return (
<>

<div  className='fix-image h-[354px] w-full relative' >
    <div className='bg-black opacity-[0.6] absolute w-full h-full  '></div>
    <div className=''>
        <div className='flex absolute bottom-[-1px]'>
            <img className='rotate w-[33.33%]' src={mountain} alt="mountain" />
            <img className='rotate w-[33.33%]' src={mountain} alt="mountain" />
            <img className='rotate w-[33.33%]' src={mountain} alt="mountain" />
        </div>
    </div>
</div>
</>  )
}
export default GridTitle