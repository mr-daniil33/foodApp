import { useEffect, useState } from 'react'
import Headling from '../Headling/Headling'
import Search from '../Search/Search'
import styles from './Menu.module.css'
import MenuItem from '../MenuItem/MenuItem'
import axios from 'axios'
import { MenuItemProps } from '../MenuItem/MenuItem.props'

function Menu() {
 

  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/food').then(res => setMenuItems(res.data)).catch(error => console.log(error));
  }, [])

  console.log(menuItems);

  return (
    <div className={styles['menu']}>
      <div className={styles['header']}>
     <Headling>Меню</Headling>
     <Search placeholder='Введите блюдо или состав'/>
     </div>
     <div className={styles['products']}>
     {
      menuItems.map((item) => <MenuItem key = {item.id} id = {item.id} name = {item.name} price = {item.price} description={item.description} rate={item.rate} image={item.image}/> 
      )
     }
     </div>
    </div>
  )
}

export default Menu
