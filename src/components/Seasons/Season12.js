import React from "react";

function Season12({episodes}){
    
    const season12List = episodes.map(episode => <li>{episode.name}</li>)
    const season12Ep = season12List.slice(216,228)

    return (
        <div>
            <h4>Episodes 216-227</h4>
            {season12Ep}
        </div>
    )

}
export default Season12;