import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/user.slice';


function Sidebar() {
 
  const navigate = useNavigate();

  const dispatch = useDispatch();



  const logout = () => {
    dispatch(userActions.logout());
    navigate('/auth');
  }
  

  return (
    <div className={styles['wrapper']}>
    <div className={styles['profile']}>
     <img src="/public/avatar.png" alt="аватар пользователя" />
     <div className={styles['name']}>Даниил</div>
     <div className={styles['email']}>mr.daniil33@gmail.com</div>
     <ul className={styles['list']}>
      <li>
        <img src="/public/menu.svg" alt="меню" />
        <Link to = '/menu'><span>Меню</span></Link>
      </li>
      <li>
        <img src="/public/cart.svg" alt="корзина" />
        <Link to = '/cart'><span>Корзина</span></Link>
      </li>
     </ul>
    </div>
    
    <Button className={styles['exit']} onClick={logout}>
    <img src="/public/logout.svg" alt="иконка выхода" />
      Выйти
      </Button>
    </div>
  )
}

export default Sidebar
