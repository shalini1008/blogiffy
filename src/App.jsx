import { useState ,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { Header , Footer} from './components'
import authService from "./appwrite/auth"
import {login , logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="min-h-[100dvh] flex flex-col justify-between bg-white">
    
        
        <Header />
        <main>
         <Outlet/>
        </main>
         <Footer />
      </div>
    
  ) : null
}

export default App