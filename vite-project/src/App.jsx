import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Students from './components/Students'
import Catagory from './components/Catagory'
import Profile from './components/Profile'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/student' element={<Students />}></Route>
        <Route path='/dashboard/catagory' element={<Catagory />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route> 
      </Route>
      
    </Routes>
    </BrowserRouter>
  )

}

export default App
