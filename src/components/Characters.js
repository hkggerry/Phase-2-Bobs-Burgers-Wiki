import React from "react";
import CharacterList from "./CharacterList"

function Characters( {data} ) {
    
    const characterData = data.map((eachCharacter) => {
        return <CharacterList key={eachCharacter.id} data={eachCharacter}/>
    }
    )

    return (
    <div>
        <p>You will find all the characters in this page</p>
        {characterData}
    </div>
    )  
}
 
export default Characters;
