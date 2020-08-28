import React from "react"
import games from "./games"

const gamesList = games.map(games)

function Game () {
    return (
        <div>
            <p>display some games here</p>
            <p>{gamesList}</p>
        </div>
    )
}

export default Game