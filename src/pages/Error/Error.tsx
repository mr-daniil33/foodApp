import styles from './Error.module.css'

function Error() {


    return (
      <div className={styles['error-page']}>
        <span>Кажется, вы заблудились</span>
        <img src="/public/lost.jpg" alt="потерявшийся человек" />
      </div>
    )
  }
  
  export default Error
  