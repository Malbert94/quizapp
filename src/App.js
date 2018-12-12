import React from 'react';
import './App.css';
import {Questionlist} from './Questionlist';
import {QuestionContainer} from './questionContainer';

export class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      poeng: 0,
      maxpoeng: Object.keys(Questionlist[0].a).length,
      quiznumber: 0,
      hidden: false,
      numofquizzes: 2,
      qlist: Questionlist
    }
    this.updateScore = this.updateScore.bind(this)
    this.resetQuiz = this.resetQuiz.bind(this)

  }

  //Legger til 1 i nåværende poengsum
  updateScore(){
    let currentscore = this.state.poeng
    this.setState({poeng: currentscore + 1})
  }

  //reseter kun poenge for øyeblikket og ikke spørsmålene
  resetQuiz(){
    window.location.reload()
  }

  setQuizNumber(event, number){
    this.setState({poeng: 0, quiznumber: number, maxpoeng: Object.keys(Questionlist[number].a).length})
  }

  render() {

    //console.log('quiznumber')
    //console.log(this.state.quiznumber)

    return(
      <div className='main'>
        <div>
          <div className='quizButtons' style={{paddingBottom: '10px'}}>
            {Questionlist.map((quiz, index) =>
              <button key={index} onClick={ (event) => this.setQuizNumber(event, index) }>
                {this.state.qlist[index].t}
              </button>
            )}
          </div>

          <button className='resetter' onClick={this.resetQuiz}>
            Reset quiz
          </button>

          <h2>Spørsmål</h2>
          <div>{this.state.qlist[this.state.quiznumber].t}</div>
          <div className='scoreboard' style={{padding: '5px'}}>
            Antall riktige: {this.state.poeng}/{this.state.maxpoeng}
          </div>

          <div className='quizbox'>
            <div className='grid'>
              <div className='right'>
                <QuestionContainer updateScore={this.updateScore} question={this.state.qlist[this.state.quiznumber]}/>
              </div>
              <div className='left'>
                <img className='imog' src={this.state.qlist[this.state.quiznumber].i} alt={this.state.qlist[this.state.quiznumber].t}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
