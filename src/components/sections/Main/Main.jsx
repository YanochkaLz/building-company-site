import React from 'react'
import './index.scss'
import Gallery from '../../containers/gallery/Gallery'

const Main = () => {
  return (
    <main>
      <div id='main' className='container'>
        <h2 className='main-title'>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
        <Gallery/>
      </div>
    </main>
  )
}

export default Main
