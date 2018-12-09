import React from 'react';
import {QuestionContainer} from './questionContainer';
import {Questionlist} from './Questionlist';

export class EuropeQuiz extends React.Component {
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
          <img src='http://i50.tinypic.com/kevuds.jpg' alt='europe map'/>
        </div>
      </div>
    )
  }
}
