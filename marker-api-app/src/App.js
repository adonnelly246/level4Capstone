import React, {Component} from "react"
import Nav from "./Nav"
import {ContextProvider} from "./userContext"

function App (){
        return (      
            <ContextProvider>
                <div class="container">
                    <Nav/>
                </div>
            </ContextProvider>

        )

}

export default App

