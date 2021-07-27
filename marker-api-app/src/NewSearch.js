import React from "react"
import {ContextConsumer} from "./userContext"
import SearchForm from "./SearchForm"


function NewSearch(props){
    const inputVal ="starbucks" //get input from the SearchForm component's input

    return(
        <div>
            <SearchForm />
                <ContextConsumer>
                {context=>(
                // <button onClick= {context.handleNewSearch(inputVal)}>SEARCH!</button>
                       <button>search</button>  
                )}
                </ContextConsumer>

            <h2 class="results">Results</h2>
            <h3>{inputVal}</h3>
        
                  <div> 
                    <ul><li>{props.newSearchArray}</li></ul>  
                    {/* <button onClick={props.SaveSearch()}>Save Search</button> */}
                </div>
        
          
        </div>   
    )
}

export default NewSearch