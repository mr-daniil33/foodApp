import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Error from './pages/Error/Error'
import Menu from './components/Menu/Menu'
import Auth from './pages/Auth/Auth'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { RequireAuth } from './components/RequireAuth'


function App() {


  return (
    <Routes>
      <Route path="/" element={<RequireAuth><Layout/></RequireAuth>}>
        <Route path="/" element={<Menu/>}/>
      </Route>
      <Route path="/auth" element={<Auth/>} >
        <Route path="/auth" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

export default App
