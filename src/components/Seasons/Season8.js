import React from "react";

function Season8({episodes}){
    
    const season8List = episodes.map(episode => <li>{episode.name}</li>)
    const season8Ep = season8List.slice(129,150)

    return (
        <div>
            <br />
            {season8Ep}
        </div>
    )

}
export default Season8;