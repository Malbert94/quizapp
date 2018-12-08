import React from 'react';
import './App.css';
import {QuestionContainer} from './questionContainer';
import {Questionlist} from './Questionlist';

export class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {qlist: Questionlist, poeng: 0, maxpoeng: 2}
    this.updateScore = this.updateScore.bind(this)
    this.resetScore = this.resetScore.bind(this)

  }

  updateScore(){
    let currentscore = this.state.poeng
    this.setState({poeng: currentscore + 1})
  }

  resetScore(){
    this.setState({poeng: 0})
  }

  render() {
    console.log('this.state.qlist app.js')
    console.log(this.state.qlist)
    return(
      <div className='main'>
        <h1>Spørsmål</h1>
        <button  onClick={this.resetScore}>Reset</button>
        <div className='scoreboard' style={{padding: '5px'}}>
        Antall riktige: {this.state.poeng}/{this.state.maxpoeng}
        </div>
        <div>
        <QuestionContainer updateScore={this.updateScore} question={this.state.qlist['1']}/>
        <QuestionContainer updateScore={this.updateScore} question={this.state.qlist['2']}/>
        </div>
      </div>
    )
  }

}
