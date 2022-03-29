import React, { useState } from 'react'
import "./SongSuggestion.css"
function SongSuggestion(props) {
  
  return (
    <div className='song__card'>
        <div className="song__info">
          <h3>{props.name}</h3>
          <h4>{props.artist}</h4>
        </div>
        
        <div className="song__interactions">
          <h4>{props.votes} votes</h4>  

          <div className="song__interactions--voting">
            <button onClick={() => props.upVote(props.index)}>^</button>
            <button onClick={() => props.downVote(props.index)}>v</button>
          </div>
        </div>
    </div>
  )
}

export default SongSuggestion