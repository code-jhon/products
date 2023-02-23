import React from 'react'
import loadingImg1 from '../assets/loading1.gif'
import loadingImg2 from '../assets/loading2.gif'
import loadingImg3 from '../assets/loading3.gif'
import loadingImg4 from '../assets/loading4.gif'
import loadingImg5 from '../assets/loading5.gif'

function Loading() {
  const arrImg = [loadingImg1, loadingImg2, loadingImg3, loadingImg4, loadingImg5]
  const randNumber = Math.floor(Math.random() * 5)
  return (
    <div><img src={arrImg[randNumber]} alt="Loading" /></div>
  )
}

export default Loading