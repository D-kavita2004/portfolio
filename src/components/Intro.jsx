import "../styles/Intro.css";
import Skills from "./Skills";
import Projects from "./Projects";
import image_url from "../assets/profile2.png";
import { animate, motion } from 'framer-motion';


const textVarients = {
   initial:{
      x:-500,
      opacity:0
   },
   animate:{
      x:0,
      opacity:1,
      transition:{
         duration:1,
         staggerChildren:0.1,
      }
   }
}
const imgVarients = {
   initial:{
      x:500,
      opacity:0
   },
   animate:{
      x:0,
      opacity:1,
      transition:{
         duration:1,
         staggerChildren:0.1,
      }
   }
}
const slideText = {
   initial:{x:500},
   animate:{x:-1400,
      transition:{duration:13, repeat:Infinity, repeatType:"loop", ease:"linear"}
   }
}
const Intro = () =>{
   return(
      <div className="Home">
         <section className="intro-section">
            <div id="intro">
               <div id="introduction">
                  <motion.div id="para" variants = {textVarients} initial="initial" animate="animate">
                     <motion.h1 variants = {textVarients}>Hi, i'm D Kavita</motion.h1>
                     <motion.h5 variants = {textVarients}>I am a passionate Frontend Developer with a proven track record of building responsive, user-centric and 100% dynamic web application and dedicated to provide top-notch, visually appealing digital experiences.</motion.h5>
                  </motion.div>
               </div>
               <div id="img-container">
                  <motion.div id="my-image"  variants={imgVarients} initial="initial" animate="animate">
                     <img src={image_url} alt="Profile-photo"/>
                  </motion.div>
               </div>
              
            </div>
            <motion.div className="bkg-scroll" variants ={slideText} initial="initial" whileInView="animate">WEB DESIGNING ANG DEVELOPMENT</motion.div>
         </section>
         <section className="skills-section"><Skills/></section>
         <section className="projects-section"><Projects/></section>
      </div>
   )
}
export default Intro;