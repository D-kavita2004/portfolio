import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
// import { Outlet } from "react-router-dom";

const AppLayout = () =>{
   return(
      <div className="App">
         <section className="hero-section">
            <Header/>
            <Intro/>
         </section>
         <section className="skills-section"><Skills/></section>
      </div>
   )
}
export default AppLayout;