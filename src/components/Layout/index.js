import './index.scss'
import { Outlet } from 'react-router-dom'
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
        <Outlet />

        <br />
      </div>

    </div>
  )
}

export default Layout
