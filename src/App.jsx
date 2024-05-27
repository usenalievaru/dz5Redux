
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import { Navbar } from './pages/Navbar'


function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes> 
    </>
  )
}

export default App
