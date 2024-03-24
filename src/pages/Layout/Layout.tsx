import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'


function Layout() {


  return (
    <div className={styles['wrapper']}>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Layout
