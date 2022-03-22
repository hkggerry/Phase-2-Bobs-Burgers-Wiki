import React, {useState} from "react";

function SuggestionBox({suggestions, onAddItem}){
    
    const suggestionList = suggestions.map(input => <li>{input.comments}</li> )
    const [comments, setComments] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const commentData = {
            comments: comments,
        }
        fetch("http://localhost:3000/suggestionBox",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(commentData),
        })
        .then((r)=>r.json())
        .then((data) => onAddItem(data))
        }
    
    return (
        <div>
          <h4>Out of all the Bob's Burgers characters, who is your favorite?</h4>
          <h4>Type it in the comment box below and share with us!</h4>
            {suggestionList}
        <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Comments:
        <input
          name="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      </form>
      </div>
    )
}
        

export default SuggestionBox;

