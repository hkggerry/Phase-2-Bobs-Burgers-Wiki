import React from "react";
import CharacterList from "./CharacterList"

function Characters( {data, setSearchTerm, searchTerm} ) {
    

    const characterData = data.map((eachCharacter) => {
        return <CharacterList key={eachCharacter.id} data={eachCharacter}/>
    })

    return (
    <div>
        <h4>Here is a list of all the characters appeared in the show. Do you remember all of them?</h4>
        <h4>Feel free to use the search bar below:</h4>
        <form className="searchbar" >
            <input 
            type="text"
            id="search"
            placeholder="search character here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
        <div className="container">
        {characterData}
        </div>
    </div>
    )  
}
 
export default Characters;
