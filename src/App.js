import React from 'react';
import './App.css';
import {EuropeQuiz} from './Europequiz';
import {SouthAmericaQuiz} from './SouthAmericaquiz';
import {Questionlist} from './Questionlist';
import {CellensOppbygging} from './CellensOppbygging';


export class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      poeng: 0,
      maxpoeng: Object.keys(Questionlist[1].a).length,
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

  SouthAmericaQuiz(){
    this.setState({quiznumber: 2, maxpoeng: Object.keys(Questionlist[3].a).length})
  }

  EuropeQuiz(){
    this.setState({quiznumber: 1, maxpoeng: Object.keys(Questionlist[1].a).length})
  }

  CellensOppbygging(){
    this.setState({quiznumber: 3, maxpoeng: Object.keys(Questionlist[2].a).length})
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
    }  else if(this.state.quiznumber === 3){
      var quizbox = (
        <CellensOppbygging updateScore={this.updateScore}/>
      )
    }

    return(
      <div className='main'>
        <div>
          <button hidden={this.state.hidden} onClick={this.EuropeQuiz.bind(this)}>
            Europa
          </button>
          <button hidden={this.state.hidden} onClick={this.SouthAmericaQuiz.bind(this)}>
            Sør-Amerika
          </button>
          <button hidden={this.state.hidden} onClick={this.CellensOppbygging.bind(this)}>
            Cellens Cellens oppbygging
          </button>
          <h1>Spørsmål</h1>
          <button  onClick={this.resetScore}>
            Reset
          </button>
          <div className='scoreboard' style={{padding: '5px'}}>
          Antall riktige: {this.state.poeng}/{this.state.maxpoeng}
          </div>
          <div className='quizbox'>
            {quizbox}
          </div>
        </div>
      </div>
    )
  }
}
