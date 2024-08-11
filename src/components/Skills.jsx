import "../styles/Skills.css";
import { motion } from "framer-motion";

const skillVarients = {
   initial:{rotateY:"0deg"},
   animate:{rotateY:"360deg",
      transition:{duration:1}
   },
  
}
const Skills =()=>{
   return(
      <div id="skill-container" >
         <h2>Skills</h2>
         <div id="my-skills" >
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>HTML</h2>
               <h5>
               Proficient in crafting responsive, semantic HTML5 for clear, accessible, and interactive web pages.</h5>
            </motion.div>
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>CSS</h2>
               <h5>Expert in creating visually stunning, responsive designs with advanced CSS3 techniques.</h5>
            </motion.div>
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>Javascript</h2>
               <h5>Proficient in JavaScript, creating dynamic, interactive web applications with modern ES6+ features and best practices.</h5>
            </motion.div>
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>ReactJs</h2>
               <h5>
               Proficient in developing dynamic, high-performance web applications using React.js, leveraging hooks, state management, and component-based architecture</h5>
            </motion.div>
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>Git & GitHub</h2>
               <h5>
               Skilled in Git and GitHub, managing version control, collaborating on code, and streamlining development workflows efficiently.</h5>
            </motion.div>
            <motion.div className="skill" variants={skillVarients} initial="initial" whileInView="animate">
               <h2>Rest Api</h2>
               <h5>
               Experienced in designing and consuming REST APIs, ensuring efficient, scalable, and secure data exchange between systems.</h5>
            </motion.div>
         </div>
      </div>
   )
}
export default Skills;