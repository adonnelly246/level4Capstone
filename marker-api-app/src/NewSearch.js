import React, {useState} from "react"
import {ContextConsumer} from "./userContext"
import SearchForm from "./SearchForm"


function NewSearch(props){
// const [searchDisplay, setSearchDisplay] = useState()
    return(
        <div class="middle">
            <SearchForm />
                <ContextConsumer>
                    {context=>(
                        
                        <button class="submitBtn" onClick= {()=>context.handleNewSearch(props.value)}>SEARCH!</button> 
                        
                    )}
                </ContextConsumer>


                        {/* useeffect/usestate? */}
                        {/* did handlenewSearch run? if so=> display both searchbar and results: just display searchbar */}
            <h2 class="results">Results</h2>
            <h3>{props.value}</h3>
        
                  <div class="results-list"> 
                    <ul><li>{props.newSearchArray}</li></ul>  
                    <ContextConsumer>
                        {context=>(
                        
                              <button class="submitBtn" onClick={()=> context.SaveSearch()}>Save Search</button> 
                              
                        )}
                    </ContextConsumer>
                </div>
        
          
        </div>   
    )
}

export default NewSearch