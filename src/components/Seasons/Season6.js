import React from "react";

function Season6({episodes}){
    
    const season6List = episodes.map(episode => <li>{episode.name}</li>)
    const season6Ep = season6List.slice(88,107)

    return (
        <div>
            <br />
            {season6Ep}
        </div>
    )

}
export default Season6;