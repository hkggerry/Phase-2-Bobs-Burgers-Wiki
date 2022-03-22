import React from "react";

function Season8({episodes}){
    
    const season8List = episodes.map(episode => <li>{episode.name}</li>)
    const season8Ep = season8List.slice(129,150)

    return (
        <div>
            <h4>Episodes 129-149</h4>
            {season8Ep}
        </div>
    )

}
export default Season8;