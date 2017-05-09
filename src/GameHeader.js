import React, { Component } from 'react';

function Title(props) {
    return ( <div> <h1 className = "title" > Lights Out </h1></div> );
}

//<button id = "new_game" onClick = { () => props.newGame() } >New Game</button>

function GameInfo(props) {
    return ( <div className = "game-info" >
                <div> <h3>MOVES</h3>
                { props.moves }
                </div> 
            </div>
    );
}

class GameHeader extends React.Component {

    render() {
        return ( 
        <div className = "header">
            <Title />
            <GameInfo moves = { this.props.moves }
            newGame = { () => this.props.newGame() } /> 
        </div>
        )
    }
}

export default GameHeader;