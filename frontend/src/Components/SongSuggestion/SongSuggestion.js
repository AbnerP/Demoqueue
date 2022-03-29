import React from 'react'

function SongSuggestion(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.artist}</p>
        <p>{props.votes}</p>
        <button onClick={props.upVote}></button>
        <button onClick={props.downVote}></button>
    </div>
  )
}

export default SongSuggestion