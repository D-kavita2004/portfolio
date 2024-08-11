import "../styles/Projects.css";
import GG_URL from "../assets/GG-project2.jpg";
import SUMMARY_URL from "../assets/summary-project2.jpg";
import PROJ_URL from "../assets/web-dev-pro.png";
import {motion} from "framer-motion";

const projectList = [
   {
      id:1,
      title:"Data Summarization",
      image:SUMMARY_URL,
      Description:`Engineered a cutting-edge, SEO-optimized web application
                  with a mobile-first design, leveraging a pre-trained NLP model
                  for advanced data summarization, resulting in a 60% time
                  savings for readers`,
      urls:" https://data-summarization.onrender.com"
   },
   {
      id:2,
      title:"Gradient Generator",
      image:GG_URL,
      Description:`Engineered and automated a gradient generator tool featuring
                  clipboard integration and customizable angle patterns, improved user
                  workflow efficiency, saving designers an average of 30% time`,
      urls:"https://kavgradientgenerator.netlify.app"
   },
   {
      id:3,
      title:"Full Stack Dribble Website",
      image:PROJ_URL,
      Description:`Built an amazing mobile responsive and SEO friendly website which
                  consists of Sign up, login, logout, profile creation page, email
                  verification page, etc
                  Skills used : Html, Css, Javascript, PHP, MySql, xampp server,etc`,
      urls:"https://dribblewebsite.000webhostapp.com"
   },

]

const imgAnimate ={
   initial:{
      y:0,
   },
   animate:{
      y:[0,7,7,-14],
      transition:{
         duration: 2, // Adjust duration for smoothness
         ease: "easeInOut", // Use a smooth easing function
         repeat: Infinity, // Repeat infinitely
         repeatType: "loop" 
      }
   }
}
const headingAnimate = {
   initial:{
      x:-500,
      opacity:0
   },
   animate:{
      x:0,
      rotate:[0,360,360,0],
      opacity:1,
      transition:{
         duration:2,
      }
   }
}
const Projects = ()=>{
   return(
         <div id="project-container" >

               <div className="progress">
                  <motion.h1  variants={headingAnimate} initial="initial" whileInView="animate">Projects</motion.h1>
               </div>

               {  
                  projectList.map((proj)=>{
                     return (
                        <section id="project">
                           <div id="proj-details">
                              <motion.div id="proj-img" variants={imgAnimate} initial="initial" animate="animate">
                                 <img src = {proj.image} ></img>
                              </motion.div>
                              <div id="proj-text">
                                 <h2>{proj.title}</h2>
                                 <h5>{proj.Description}</h5>
                                 <a href={proj.urls} target="_blank">Take Me To Site</a>
                              </div>
                           </div>
                        </section>
                     )
                  })
               }
         </div>
   )
}
export default Projects;