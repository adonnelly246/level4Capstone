import React from "react"
import App from './App'

function SearchForm (props){
    return(
    <div>
        <form>
            <h2>New Search</h2>
            <input   
            type="text"
            name="new-search"
            placeholder="Search by Trademark"
            value={props.input}
            onChange={props.handleChange}/>
        </form>
    </div>
    )
}

export default SearchForm