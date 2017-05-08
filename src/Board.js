import React, { Component } from 'react';

class Board extends React.Component {
  _renderSquare(i) {
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
          {this._renderSquare(3)}
          {this._renderSquare(4)}
        </div>
        <div className="board-row">
          {this._renderSquare(5)}
          {this._renderSquare(6)}
          {this._renderSquare(7)}
          {this._renderSquare(8)}
          {this._renderSquare(9)}
        </div>
        <div className="board-row">
          {this._renderSquare(10)}
          {this._renderSquare(11)}
          {this._renderSquare(12)}
          {this._renderSquare(13)}
          {this._renderSquare(14)}
        </div>
        <div className="board-row">
          {this._renderSquare(15)}
          {this._renderSquare(16)}
          {this._renderSquare(17)}
          {this._renderSquare(18)}
          {this._renderSquare(19)}
        </div>
        <div className="board-row">
          {this._renderSquare(20)}
          {this._renderSquare(21)}
          {this._renderSquare(22)}
          {this._renderSquare(23)}
          {this._renderSquare(24)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className={(props.value) ? "square active" : "square"} onClick={() => props.onClick()}>
    </button>
  );
}

export default Board;