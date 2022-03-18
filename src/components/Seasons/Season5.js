import React from "react";

function Season5({episodes}){
    
    const season5List = episodes.map(episode => <li>{episode.name}</li>)
    const season5Ep = season5List.slice(67,88)

    return (
        <div>
            <br />
            {season5Ep}
        </div>
    )

}
export default Season5;