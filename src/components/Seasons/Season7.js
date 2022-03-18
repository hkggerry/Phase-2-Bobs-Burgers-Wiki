import React from "react";

function Season7({episodes}){
    
    const season7List = episodes.map(episode => <li>{episode.name}</li>)
    const season7Ep = season7List.slice(107,129)

    return (
        <div>
            <br />
            {season7Ep}
        </div>
    )

}
export default Season7;