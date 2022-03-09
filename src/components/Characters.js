import React, { useEffect, useState } from "react";

function Characters() {
    // const [image, setImages] = useState(null)

    // useEffect(()=>{
    //     fetch("https://bobsburgers-api.herokuapp.com/characters/")
    //     .then(r => r.json())
    //     .then(data => console.log(data))
    // }, [])
    
    return (
    <div>
        <p>You will find all the characters in this page</p>
        {/* <img src={data.image} alt="loading" /> */}
    </div>
    )  
}
 
export default Characters;
