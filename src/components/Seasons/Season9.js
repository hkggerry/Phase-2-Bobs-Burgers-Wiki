import React from "react";

function Season9({episodes}){
    
    const season9List = episodes.map(episode => <li>{episode.name}</li>)
    const season9Ep = season9List.slice(150,172)

    return (
        <div>
            <h4>Episodes 150-171</h4>
            {season9Ep}
        </div>
    )

}
export default Season9;