import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import TambahData from './pages/TambahData.jsx'
import EditData from './pages/Edit.jsx'
import AuthUser from './UserContext.jsx'
import axios from 'axios'
import './App.css'
import { useState , useEffect } from 'react'
import AuthCheck from './middleware/AuthCheck.jsx'
function App() {

  const [ lodaing , setLoading ] = useState(true)
  const tokens = sessionStorage.getItem('tokens')
  const baseURl = 'http://localhost:8000/api/a1'
  const [ user , setUser ] = useState({})

  const getUser = async () => {


    if(!tokens){
      return setLoading(false)
    }

    try{

      axios.get(`${baseURl}/auth/get`,{
        headers:{
          Accept: 'Application/Json',
          Authorization: `Bearer ${tokens}`
        }
      })
      .then( Response => {
        setUser(Response.data.user)
        setLoading(false)
      })

    }catch(err) {
      console.log(err)
    }
  }


  useEffect(() => {

    getUser()

  }, [])
  



  return (
    <AuthUser.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/dashboard' element={<Dashboard />}/> */}
          <Route path='/dashboard' element={<AuthCheck Element={ Dashboard } loading={lodaing} />} />
          <Route path='/form-register' element={<TambahData />}/>
          <Route path='/edit/:id' element={<AuthCheck Element={ EditData } loading={lodaing} />} />
        </Routes>
      </BrowserRouter>
    </AuthUser.Provider>
  )
}

export default App
