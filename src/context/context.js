import { createContext, useState,} from "react";


const testContext = createContext();

const State =(props) =>{
    
    const a ={
        "color" :"Red",
        "animal" : "Panda"
    }
  
    const [c, setC] = useState(a);

    const update = ()=>{
         setTimeout(() => {
            setC({
                "color" :"Green",
                "animal" : "Cat" 
            })
         }, 3000);
    }



    return(

      <testContext.Provider value={{c,update}}>
        {props.children}
      </testContext.Provider>

    )


}


export  {State}

export default testContext;