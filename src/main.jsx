import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import AppLayout from './App';
import './index.css';
import Intro from "./components/Intro";
import Skills from './components/Skills';
import Projects from './components/Projects';

const AppRouterComponent = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<AppLayout/>}>
          <Route path='/Intro' element={<Intro/>}></Route>
          <Route path='/' element={<Intro/>}></Route>
          <Route path='/Skills' element ={<Skills/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
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
