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
            <nav>
                <h2>D KAVITA</h2>
                <ul>
                    <li><a className='nav-links' href="#intro">Intro</a></li>
                    <li><a className='nav-links' href="#skill-container">Skills</a></li>
                    <li><a className='nav-links' href="https://github.com/D-kavita2004?tab=repositories" target='_blank'>GitHub</a></li>
                    <li><a className='nav-links' href="https://www.linkedin.com/in/d-kavita-119691257" target='_blank'>LinkedIn</a></li>
                </ul>
                <FontAwesomeIcon className='hover-effect' id='Hide' onClick={showSideBar} icon={faBars} style={{ color: "#1d1d1f",LinkfontSize: "4vmax", marginLeft: "-80px" }} />
            </nav>
            <nav className="sideBar">
                <FontAwesomeIcon id= "xmark" className='hover-effect' onClick={closeSideBar} icon={faXmark} style={{ color: "#595b5f", fontSize: "25px" }} />
                <ul className="sideList">
                    <li><a className='nav-links' href=".intro">Intro</a></li>
                    <li><a className='nav-links' href="#skill-container">Skills</a></li>
                    <li><a className='nav-links' href="https://github.com/D-kavita2004?tab=repositories" target='_blank'>GitHub</a></li>
                    <li><a className='nav-links' href="https://www.linkedin.com/in/d-kavita-119691257" target='_blank'>LinkedIn</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
