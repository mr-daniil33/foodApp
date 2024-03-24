import { HeadlingProps } from './Headling.props.ts'
import styles from './Headling.module.css'


function Headling({children} : HeadlingProps) {
 

  return (
    <h1 className={styles['h1']}>{children}</h1>
  )
}

export default Headling
