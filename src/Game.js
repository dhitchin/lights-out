import React, { Component } from 'react';
import Board from './Board';
import GameHeader from './GameHeader';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: this._initBoard(),
                move: null,
            }],
            stepNumber: 0,
        };
    }

    _newGame() {
        this.setState({
            history: [{
                squares: this._initBoard(),
                move: null,
            }],
            stepNumber: 0,
        });
    }

    _initBoard() {
        var squares = Array(25).fill(null);

        //toggle between 5 and 20 random locations
        var numOn = Math.floor((Math.random() * 15) + 5);
        for (var i = 0; i < numOn; i++) {
            var x = Math.floor((Math.random() * 25));
            this._processMove(squares, x);
        }
        return squares;
    }

    _undo() {
        this.setState({
            stepNumber: this.state.stepNumber - 1,
        });
    }

    _processMove(squares, i) {
        squares[i] = !squares[i];
        if (i - 5 >= 0) squares[i - 5] = !squares[i - 5];
        if (i + 5 < 25) squares[i + 5] = !squares[i + 5];
        if (((i + 1) % 5) != 0) squares[i + 1] = !squares[i + 1];
        if ((i % 5) != 0) squares[i - 1] = !squares[i - 1];
    }

    _handleClick(i) {
        var history = this.state.history.slice(0, this.state.stepNumber + 1);
        var current = history[history.length - 1];
        const squares = current.squares.slice();

        this._processMove(squares, i);
        this.setState({
            history: history.concat([{
                squares: squares,
                move: { location: i },
                when: Date.now(),
            }]),
            stepNumber: history.length,
        });
    }

    

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        var gameWon = gameIsWon(current.squares);

        return ( < div className = "game" >
            <GameHeader moves = { this.state.stepNumber } />
            { gameWon && <GameMessage won = { gameWon } newGame = { () => this._newGame() } /> }
            <Board squares = { current.squares }
                onClick = { (i) => this._handleClick(i) } />
            <p>Lights Out is a puzzle game consisting of a grid of lights that are either on or off.  Pressing any light will toggle it and its adjacent lights.  The goal of the game is to switch all the lights off.</p>
            </div>
        );
    }
}

function gameIsWon(squares) {
    for (var i = 0; i < 25; i++) {
        if (squares[i]) return null;
    }
    return 1;
}

function GameMessage(props) {
    return (
        <div className = "game-won">
            <p>You won!</p>
            <button id = "new_game" onClick = { () => props.newGame() } >New Game</button>
        </div>
    );
}

export default Game;