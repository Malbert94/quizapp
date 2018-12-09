import React from 'react';
import {QuestionContainer} from './questionContainer';
import {Questionlist} from './Questionlist';

export class SouthAmericaQuiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {qlist: Questionlist}
  }

  render(){
    console.log('this.state.qlist app.js')
    console.log(this.state.qlist)
    return(
      <div>
        <h3>Plasser landene.</h3>
        <div className='container'>
          {/* bruk tall for å spesifisere hvilket spørsmål fra Questionlist som skal brukes*/}
          <QuestionContainer updateScore={this.props.updateScore} question={this.state.qlist['1']}/>
          <QuestionContainer updateScore={this.props.updateScore} question={this.state.qlist['2']}/>
        </div>
        <div className='imageContainer'>
          <img src='http://i47.tinypic.com/2rw9csz.jpg' alt='southamerica map'/>
        </div>
      </div>
    )
  }
}
