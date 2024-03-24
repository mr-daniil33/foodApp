import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Headling from '../Headling/Headling'
import styles from './Login.module.css'
import { FormEvent } from 'react'
import { LoginProps } from './Login.props'
import axios, { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { AppDispath } from '../../../store/store'
import { userActions } from '../../../store/user.slice'


function Login() {

  const dispatch = useDispatch<AppDispath>();

  const navigate = useNavigate();
 
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginProps;
    const {email, password} = target;
    await sendLogin(email.value, password.value)

}


  const sendLogin = async (email: string, password: string) => {
    try {
      const {data} = await axios.post("https://purpleschool.ru/pizza-api-demo/auth/login", {email, password});
      dispatch(userActions.addJwt(data.access_token));
      navigate('/');
      
    }
    catch (e) {
      if (e instanceof AxiosError) {
        console.log(e)
      }
    }
    }

  return (    
    <div className={styles['login']}>
        <Headling>Вход</Headling>
       
        <form onSubmit={submit} className={styles['form']}>
            <label htmlFor="email">Ваш email</label>
            <input type="email" id="email" placeholder='Email'/>
            <label htmlFor="password">Ваш пароль</label>
            <input type="password" id="password" placeholder='Пароль'/>
            <Button appearance="big" className={styles['form-button']}>ВХОД</Button>
        </form>
        <div className={styles['links']}>
            <span>Нет аккаунта?</span>
            <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
    </div>
    
    
  )
}

export default Login
