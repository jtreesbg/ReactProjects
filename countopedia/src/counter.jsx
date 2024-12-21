import React from "react";
import attack from './images/attack.png'
import defend from './images/defend.png'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefend = this.handleDefend.bind(this);
        this.state = {
            count: 0,
            gameStatus: '',
            lastTurn: ''
        }
    }

    handleAttack = () => {
        this.setState((prevState) => {
            let newCount = prevState.count + Math.round(Math.random() * 10);

            return {
                count: newCount,
                lastTurn: 'Attack',
                gameStatus: newCount >= 10 ? 'You Won!' : prevState.gameStatus
            }
        });
    }

    handleDefend = () => {
        this.setState((prevState) => {
            let newCount = prevState.count - Math.round(Math.random() * 10);

            return {
                count: newCount,
                lastTurn: 'Defend',
                gameStatus: newCount <= -10 ? 'You Lost!' : prevState.gameStatus
            }
        });

    }

    randomAction = () => {
        let playMode = Math.round(Math.random());
        if (playMode % 2 == 0) {
            this.handleAttack();
        } else {
            this.handleDefend();
        }
    }

    restart = () => {
        this.setState(() => {
            return {
                count: 0,
                gameStatus: '',
                lastTurn: ''
            };
        });
    }

    render() {
        return (
            <div className="row text-white text-center">
                <h1>GameScore: {this.state.count}</h1>
                <p>You win at +10 and lose at -10 points!</p>
                <p>Last Play : {this.state.lastTurn}</p>
                <h3>Game Status : {this.state.gameStatus}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img
                        style={{
                            width: '100%',
                            cursor: 'pointer',
                            border: '1px solid green'
                        }}
                        className="p-4 rounded" src={attack} onClick={this.handleAttack}></img>
                </div>
                <div className="col-6 col-md-3">
                    <img
                        style={{
                            width: '100%',
                            cursor: 'pointer',
                            border: '1px solid yellow'
                        }}
                        className="p-4 rounded" src={defend} onClick={this.handleDefend}></img>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.randomAction} >Random play</button>
                    <br />
                    <button className="btn btn-warning w-100 mt-2" onClick={this.restart}>Restart</button>
                </div>
            </div>
        )
    }
}