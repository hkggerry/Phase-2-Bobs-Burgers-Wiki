import React from "react";


function Home({image}){
    const quickImage = image.map((image) => {
        return image.image
    })

    return (
    <div>
        <h3>Welcome Home!</h3>
        <p>Bob's Burgers is an American animated sitcom that features Bob the restaurant owner and his family.</p> 
        <p>For all the fans out there, I have here a website that includes an entire list of characters that has featured in the show and an episode list for all 12 seasons. Feel free to play around with the check box in the episode list to keep track of the episodes you watched. Enjoy!</p>
        <div className="quickimage"> <img src={quickImage[0]} /> </div>
    </div>
    
    )}

export default Home;