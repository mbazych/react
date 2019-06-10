import React from "react"
import "./index.css"
function Joke(props){
    return (
        <div className="singleJoke">
            <h3 style={{display: props.joke ? "block" : "none"}}>Question:  {props.joke}</h3>
            <h3>Pun:  {props.pun}</h3>
            <br/>
        </div>
    )
}

export default Joke