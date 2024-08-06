import "../styles/Intro.css";
import image_url from "../assets/profile2.png";
import { motion } from 'framer-motion';
import { stagger } from "framer-motion";

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
         repeat:1
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
         repeat:1
      }
   }
}
const Intro = () =>{
   return(
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
   )
}
export default Intro;