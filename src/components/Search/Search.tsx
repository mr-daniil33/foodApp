import styles from './Search.module.css'
import { SearchProps } from './Search.props'

function Search({...props} : SearchProps) {
 

  return (
    <div className={styles['input-wrapper']}>
        <img src="/public/search.svg" alt="иконка поиска" />
        <input type="text" {...props}/>
    </div>
   
  )
}

export default Search
