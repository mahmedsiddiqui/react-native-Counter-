import { View, Text } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [counter,setCounter]=useState(0)
  
  const addcounter =()=>{
    setCounter(counter+1)
    console.log(counter);
    
  }
  const deccount =()=>{
    setCounter(counter-1)
    console.log(counter);
    if (counter < 1) {
      setCounter(counter)
    }
  
    
  }
  return (
   <>
    <h1 style={{textAlign:"center", boxShadow:"2px 2px 20px red" }}  >{counter}</h1>
    <div className="buttons"  style={{display:"flex",justifyContent:"space-evenly",gap:"20px"}}  >
    <button style={{height:"50px",width:"100px",padding:"10px",borderRadius:"20px",alignItems:"center",}} onClick={addcounter} >add count</button>
    <button style={{height:"50px",width:"100px",padding:"10px",borderRadius:"20px",alignItems:"center",}} onClick={deccount}  >decrese count</button>
    
    </div>
 
    
    


   </>
  )
}

export default index