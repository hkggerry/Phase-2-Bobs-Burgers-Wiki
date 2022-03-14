import React from "react";

function SuggestionBox({suggestions}){
    const suggestionList = suggestions.map(input => <li>{input.comments}</li>)
    console.log(suggestions)

    return (
        <div>
            <h3>Suggestion Box</h3>
            {suggestionList}
        <button>Click to submit</button>
        </div>
    )}

export default SuggestionBox;