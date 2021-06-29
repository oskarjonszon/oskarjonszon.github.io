import './Game.css';
import React, { Component } from 'react';

class Game extends Component
{

    static rows = 6;
    static cols = 7;

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            field : []
        }
    }

    componentDidMount() 
    {
        
    }

    prepareField()
    {
        field = new Array();
        for(i = 0; i < rows; i++)
        {
            field[i] = new Array();
            
            for(j = 0; j < cols; j++)
            {   
                field[i].push(0);
            }
        }
    }
}



