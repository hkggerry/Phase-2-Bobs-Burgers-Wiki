import React from "react";
import CharacterList from "./CharacterList"
// import { Card } from "semantic-ui-react";

function Characters( {data} ) {
    
    const characterData = data.map((eachCharacter) => {
        return <CharacterList key={eachCharacter.id} data={eachCharacter}/>
    }
    )

    return (
    <div>
        <p>You will find all the characters in this page</p>
        {/* <Card.Group itemsPerRow={6}> */}
        {characterData}
        {/* </Card.Group> */}
    </div>
    )  
}
 
export default Characters;
