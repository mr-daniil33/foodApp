import { Outlet } from 'react-router-dom'
import styles from './Auth.module.css'

function Auth () {


    return (
      <div className={styles['auth']}>
        <div className={styles['auth-sidebar']}>
          <img src="/public/auth-logo.svg" alt="логотип приложения" />
        </div>
        <Outlet/>
      </div>
    )
  }
  
  export default Auth
  