"use client"
import {useState} from "react"
import Login from "./Login"
import Signup from "./Signup"

function Auth() {
  const [op, setOp] = useState<Boolean>(true)
  
  return (
    
      <>
      
     { op ?  <Login 
     
     /> : <Signup
     setOp={setOp}
     />  }
      
      
        </>
    
  )
}

export default Auth
