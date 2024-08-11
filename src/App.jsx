import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () =>{
   return(
      <div className="App">
         <section className="hero-section">
            <Header/>
            <Outlet/>
         </section>
      </div>
   )
}
export default AppLayout;