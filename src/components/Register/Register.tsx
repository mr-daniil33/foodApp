import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button'
import Headling from '../Headling/Headling'
import styles from './Register.module.css'
import { useSelector } from 'react-redux';
import {  RootState } from '../../../store/store';
import { useEffect } from 'react';



function Register() {
 
const navigate = useNavigate();


const jwt = useSelector((store: RootState) => store.user.jwt)

useEffect(() => {
    if (jwt) {
        navigate('/')
    }
}, [jwt, navigate])



  return (    
    <div className={styles['register']}>
        <Headling>Регистрация</Headling>
       
        <form className={styles['form']}>
            <label htmlFor="email">Ваш email</label>
            <input type="email" id="email" name="email" placeholder='Email'/>
            <label htmlFor="password">Ваш пароль</label>
            <input type="password" id="password" name="password" placeholder='Пароль'/>
            <label htmlFor="username">Ваше имя</label>
            <input type="text" id="username" name="username" placeholder='Имя' />
            <Button appearance="big" className={styles['form-button']}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
        </form>
        <div className={styles['links']}>
            <span>Есть аккаунт?</span>
            <Link to="/auth">Войти</Link>
        </div>
    </div>
    
    
  )
}

export default Register
