import styles from './MenuItem.module.css'
import { MenuItemProps } from './MenuItem.props'


function MenuItem(props: MenuItemProps) {
 

  return (
    <div className={styles['menuItem']}>
        <img src={props.image} alt="блюдо" />
        <div className={styles['price']}>{props.price}<span className={styles['currency']}>₽</span>
        </div>
        <div className={styles['rate']}>{props.rate}
        <img src="/public/star.svg" alt="звезда" />
        </div>
        <div className={styles['productDescription']}>
          <span>{props.name}</span>
          <p>
          {props.description}
          </p>
        </div>
    </div>
  )
}

export default MenuItem
