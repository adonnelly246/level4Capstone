import React, {useState} from "react"
import {ContextConsumer} from "./userContext"

function SearchForm (props){
const [queryInput, setQueryInput] = useState('')
    return(
                   <div>
                   <form>
                       <h2>New Search</h2>
                       <input   
                       type="text"
                       name="new-search"
                       placeholder="Search by Trademark"
                       value={queryInput}
                       onChange={event => setQueryInput(event.target.value)}/>
                   </form>
               </div>
                

    )
}

export default SearchForm