import React from "react";
import CharacterList from "./CharacterList"

function Characters( {data, setSearchTerm, searchTerm} ) {
    

    const characterData = data.map((eachCharacter) => {
        return <CharacterList key={eachCharacter.id} data={eachCharacter}/>
    })

    return (
    <div>
        <p>You will find all the characters in this page</p>
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
