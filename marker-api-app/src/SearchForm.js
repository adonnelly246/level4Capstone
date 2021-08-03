import React, {useState} from "react"


function SearchForm (){
const [queryInput, setQueryInput] = useState('')
    return(
                   <div>
                   <form>
                       <h2>New Search</h2>
                       <input   
                       type="text"
                       name="new-search"
                       placeholder="Search Domains"
                       value={queryInput}
                       onChange={event => setQueryInput(event.target.value)}/>
                   </form>
               </div>
                

    )
}

export default SearchForm