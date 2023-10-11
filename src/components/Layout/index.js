import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import AnimatedCursor from 'react-animated-cursor'
import backgroundImg from '../../assets/images/51141146446_69daa83120_k.jpg'

const Layout = () => {
  return (
    <div className="App" >
      <Sidebar />
      <div className="page" style={{backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: ''
    }}>
        <AnimatedCursor
          color="184, 17, 184"
          innerSize={40}
          outerSize={0}
          innerStyle={{
            mixBlendMode: 'difference',
          }}
        />
        <Outlet />

        <br />
      </div>
    </div>
  )
}

export default Layout
