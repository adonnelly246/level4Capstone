import React from "react"
import {ContextConsumer} from "./userContext"
import SearchForm from "./SearchForm"

function Home(){
    return(
        <div class="home">
            <SearchForm/>
        {/* <ContextConsumer>
            {context=>(
                context.newSearchArray.map((info) => <SearchForm info={info} />)
             
            )}
        </ContextConsumer> */}
            <div>
                <h1>Trademark Checker</h1>
                <p>Use the searchbar or the "New Search" option above to search trademarks by name</p>
            </div>
        </div>
    )
}

export default Home