import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavBar from "../NavBar"
import './index.scss'
import AnimatedCursor from 'react-animated-cursor'
import backgroundImg from '../../assets/images/background.jpg'

const Layout = () => {
  return (
    <div className="App">


      <div
        className="page"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* <AnimatedCursor
          color="280, 245, 255"
          innerSize={5}
          outerSize={40}
          outerStyle={{
            mixBlendMode: 'exclusion',
            borderRadius: '2',
            animation: 'fadeIn 4s',
            // TODO: fix delay
            //animationDelay: '1s'

          }}
          innerStyle={{
            borderRadius: '2',
          }}
          outerAlpha={1}
          // trailingSpeed={10}
          // showSystemCursor={'false'}
          outerScale={.6}
        /> */}
        <Outlet />

        <br />
      </div>

    </div>
  )
}

export default Layout
