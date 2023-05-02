import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-dark'>
            <div className='container bg-dark'>
            <div className='row'>
                <div className='col-12'>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Test Task</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item px-4">
                                        <NavLink class="nav-link active " aria-current="page" style={{textDecoration:"none", color:"white"}} to="/">CreateUser</NavLink>
                                    </li>
                                    <li class="nav-item px-4">
                                        <NavLink class="nav-link " to="/show" style={{textDecoration:"none", color:"white"}}>ShowUser</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
