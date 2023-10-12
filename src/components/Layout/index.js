import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import AnimatedCursor from 'react-animated-cursor'
import backgroundImg from '../../assets/images/51141146446_69daa83120_k.jpg'
import noise from '../../assets/images/noise.png'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div
        className="page"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <AnimatedCursor
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
        />
        <Outlet />

        <br />
      </div>
      <div className='noise'
      style={{
        backgroundImage: `url(${noise})`,
        backgroundRepeat: 'repeat',
      }}></div>
    </div>
  )
}

export default Layout
