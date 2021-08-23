import './Game.css';
import React, { Component } from 'react';

const rows = 6;
const cols = 7;

class Game extends Component
{
    constructor(props) 
    {
        super(props);

        var field = Array.from(Array(rows), () => new Array(cols))
        
        this.state = 
        {
            field : field
        }
    }

    componentDidMount() 
    {
        var field = Array.from(Array(rows), () => new Array(cols))

        for(var i = 0; i < rows; i++)
        {           
            for(var j = 0; j < cols; j++)
            {
                field[i][j] = 1;
            }
        }
        this.setState({field})
    }

    drawField()
    {
        var grid = new Array();
        let field = this.state.field;
 
        for(var i = 0; i < rows; i++)
        {
            grid[i] = new Array();
            for(var j = 0; j < cols; j++)
            {   
                var color = getColor(field[i][j])
                let id = i + "," + j;
                grid[i].push(<div className={"grid-area " + "grid-area-" + color} id={id} onClick={() => this.clicked(i)}> {i},{j} </div>);
            }
        }

        return grid;
    }

    drawButtons()
    {
        return (<div className="controls"> 
                    <div className="button button-start"> Start </div>
                    <div className="button button-restart"> Restart </div>
                </div>)
    }

    clicked(column)
    {
        if(isValid(column))
        {

        }
    }

    isValid(column)
    {
        return true;
    }

    render()
    {
        return(
            <div className="board">
                <div className="grid">
                    {this.drawField()}
                </div>
                {this.drawButtons()}
            </div>
        );
    }
}

function getColor(value)
{
    switch(value)
    {
        case 1:
            return "player";
        case -1:
            return "bot"

        default:
            return "empty"
    }
}

function isValid(column)
{
    return true;
}

export default Game;



