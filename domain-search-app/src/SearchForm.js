import React, {useState} from "react"
import {ContextConsumer} from "./Context"


function SearchForm (){

    return(
                   <div>
                         <ContextConsumer>
                            {context=>(
                                <form onSubmit={context.handleNewSearch}>
                                  <h2>New Search</h2>
                                  <input  
                                  className="input-field" 
                                  type="text"
                                  name="searchTerm"
                                  placeholder="Search Domains"
                                  value={context.searchTerm}
                                  onChange={context.handleChange}/>
                                <button className="submitBtn">SEARCH!</button> 
                              </form>   
                                     )}
                        </ContextConsumer>
               </div>
                

    )
}

export default SearchForm