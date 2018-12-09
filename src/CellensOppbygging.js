import React from 'react';
import {QuestionContainer} from './questionContainer';
import {Questionlist} from './Questionlist';
import celle from './Pictures/celle.png';

export class CellensOppbygging extends React.Component {
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
        <div className='grid'>
          <div className='right'>
            <QuestionContainer updateScore={this.props.updateScore} question={this.state.qlist['2']}/>
          </div>
          <div className='left'>
            <img src={celle} alt='celle'/>
          </div>
        </div>
      </div>
    )
  }
}
