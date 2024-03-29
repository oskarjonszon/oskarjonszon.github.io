import React, { Component } from 'react';
import './Connect_4.css';
import Game from './Game'

class Connect_4 extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        rows :    6,
        cols :    7,
        length :  4,
        AI_piece : 1,
        P_piece : -1,
    };
  }

  render()
  {
    return (
        <div>
            <h1> Connect 4 </h1>
            <div className="board">
              <Game/>
            </div>
        </div>
    );
  }
}

export default Connect_4;
