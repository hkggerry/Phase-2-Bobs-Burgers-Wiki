import React from "react";

function Season10({episodes}){
    
    const season10List = episodes.map(episode => <li>{episode.name}</li>)
    const season10Ep = season10List.slice(172,194)

    return (
        <div>
            <br />
            {season10Ep}
        </div>
    )

}
export default Season10;