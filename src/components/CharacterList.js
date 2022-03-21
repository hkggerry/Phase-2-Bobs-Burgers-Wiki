import React from "react";
// import { Card } from "semantic-ui-react";

function CharacterList( {data} ){

    return (
        // <Card>
        <div className="character">
            <div className="image">
                <img src={data.image} alt={data.name} height="300px" />
            </div>
            <div className="details">
                <strong>{data.name}</strong>
                <br/>
                <p>{data.occupation}</p>
            </div>
        </div>
        // </Card>
    )
}

export default CharacterList;