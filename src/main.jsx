import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {UserApp} from "./UserApp.jsx";
import {PokeApp} from "./PokeApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp></UserApp>
  </React.StrictMode>,
)
