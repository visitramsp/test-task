import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import ShowUser from './components/ShowUser'
const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<CreateUser/>} />
                <Route path='/show' element={<ShowUser/>} />
            </Routes>

        </div>
    )
}

export default App
