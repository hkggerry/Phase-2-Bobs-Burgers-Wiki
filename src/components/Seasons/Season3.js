import React from "react";

function Season3({episodes}){
    
    const season3List = episodes.map(episode => <li>{episode.name}</li>)
    const season3Ep = season3List.slice(22,45)

    return (
        <div>
            <h4>Episodes 22-44</h4>
            {season3Ep}
        </div>
    )

}
export default Season3;