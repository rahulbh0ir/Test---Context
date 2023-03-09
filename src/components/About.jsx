import React,{useContext, useEffect} from 'react'
import testContext from '../context/context'

const About = () => {
  const b = useContext(testContext)
  useEffect(() =>{
     b.update()   
     // eslint-disable-next-line  
   },[])
  
  return (
    <div>
      I like {b.c.color} color and my favorite animal is {b.c.animal}
    </div>
  )
}

export default About
