import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import AnimatedCursor from 'react-animated-cursor'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
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
