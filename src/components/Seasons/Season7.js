import React from "react";

function Season7({episodes}){
    
    const season7List = episodes.map(episode => <li>{episode.name}</li>)
    const season7Ep = season7List.slice(107,129)

    return (
        <div>
            <h4>Episodes 107-128</h4>
            {season7Ep}
        </div>
    )

}
export default Season7;