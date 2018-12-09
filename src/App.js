import React from 'react';
import './App.css';
import {EuropeQuiz} from './Europequiz';
import {SouthAmericaQuiz} from './SouthAmericaquiz';
import {Questionlist} from './Questionlist';


export class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      poeng: 0,
      maxpoeng: Object.keys(Questionlist).length,
      quiznumber: 1,
      hidden: false,
      numofquizzes: 2
    }
    this.updateScore = this.updateScore.bind(this)
    this.resetScore = this.resetScore.bind(this)

  }

  //Legger til 1 i nåværende poengsum
  updateScore(){
    let currentscore = this.state.poeng
    this.setState({poeng: currentscore + 1})
  }

  //reseter kun poenge for øyeblikket og ikke spørsmålene
  resetScore(){
    window.location.reload()
  }

  nextQuiz(){
    this.setState({quiznumber: this.state.quiznumber + 1})
  }

  lastQuiz(){
    this.setState({quiznumber: this.state.quiznumber - 1})
  }

  render() {
    console.log('Questionlist.length')
    console.log(this.state.maxpoeng)

    if(this.state.quiznumber === 1){
      var quizbox = (
        <EuropeQuiz updateScore={this.updateScore}/>
      )
    }  else if(this.state.quiznumber === 2){
      var quizbox = (
        <SouthAmericaQuiz updateScore={this.updateScore}/>
      )
    }

    return(
      <div className='main'>
        <h1>Spørsmål</h1>
        <button  onClick={this.resetScore}>
          Reset
        </button>
        <div className='scoreboard' style={{padding: '5px'}}>
        Antall riktige: {this.state.poeng}/{this.state.maxpoeng}
        </div>
        <div className='quizbox'>
          {quizbox}
          <button hidden={this.state.hidden} onClick={this.lastQuiz.bind(this)}>
            Forrige
          </button>
          <button hidden={this.state.hidden} onClick={this.nextQuiz.bind(this)}>
            Neste
          </button>
        </div>

      </div>
    )
  }
}
