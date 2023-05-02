import react from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById('root')
)