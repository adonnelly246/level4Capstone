import React from "react"

function Home(props){
    return(
        <div class="middle">
            
        <div>-------------------------------------</div>
            <div class="home">
                <h1>Trademark Checker</h1>
                <p>Use the searchbar or navigate to the "New Search" page to search for available trademarks by name</p>
                This app uses the Marker API to check if certain trademark names are available. The API allows you to search the US trademarks database by serial number, trademark, owner, upcoming expiration date, and product/service description. It's an fast and easy way for newer business owners to check if their name is trademarked before they begin the process. 
            </div>
        </div>
    )
}

export default Home