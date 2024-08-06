import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import AppLayout from './App';
import './index.css'

const AppRouterComponent = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<AppLayout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouterComponent/>
  </React.StrictMode>,
)
