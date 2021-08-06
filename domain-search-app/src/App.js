import React, {Component} from "react"
import Nav from "./Nav"
import {ContextProvider} from "./Context"

function App (){
        return (  
                
            <ContextProvider>
                 <div >
                 <Nav/>     
                </div>
            </ContextProvider>
                
        )

}

export default App

