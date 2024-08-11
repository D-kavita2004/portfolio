import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css"
import {Link} from 'react-router-dom';

const Header = () => {
    function showSideBar() {
        document.querySelector(".sideBar").style.display = "flex";
    }
    function closeSideBar() {
        document.querySelector(".sideBar").style.display = "none";
    }

    return (
        <header>
            <nav className='nav-bar'>
                <h2>PORTFOLIO</h2>
                <ul>
                    <Link className='nav-links' to ="/Intro"><li>Intro</li></Link>
                    <Link className='nav-links' to ="/Skills"><li>Skills</li></Link>
                    <Link className='nav-links' to ="/Projects"><li>Projects</li></Link>
                    <Link className='nav-links' to="https://github.com/D-kavita2004?tab=repositories" target='_blank'><li>GitHub</li></Link>
                    <Link className='nav-links' to ="https://www.linkedin.com/in/d-kavita-119691257" target='_blank'><li>LinkedIn</li></Link>
                </ul>
                <FontAwesomeIcon className='hover-effect' id='Hide' onClick={showSideBar} icon={faBars} style={{ color: "#1d1d1f",LinkfontSize: "4vmax", marginLeft: "-80px" }} />
            </nav>
            <nav className="sideBar">
                <FontAwesomeIcon id= "xmark" className='hover-effect' onClick={closeSideBar} icon={faXmark} style={{ color: "#595b5f", fontSize: "25px" }} />
                <ul className="sideList">
                    <Link className='nav-links' to ="/Intro"><li>Intro</li></Link>
                    <Link className='nav-links' to ="/Skills"><li>Skills</li></Link>
                    <Link className='nav-links' to ="/Projects"><li>Projects</li></Link>
                    <Link className='nav-links' to="https://github.com/D-kavita2004?tab=repositories" target='_blank'><li>GitHub</li></Link>
                    <Link className='nav-links' to ="https://www.linkedin.com/in/d-kavita-119691257" target='_blank'><li>LinkedIn</li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
