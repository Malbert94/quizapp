import React from 'react';
import './App.css';

export class QuestionContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = { input: '', check: '', question: this.props.question, disabled: false}

    this.handleInput = this.handleInput.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleInput(event){
    this.setState({input: event.target.value.toLowerCase().trim().replace(/\s/g,'')});
    console.log(this.state.input)
  }

  handleAnswer(event){
    console.log('handleAnswer called')
      for(let i =0; i < this.state.question.a.length; i++){
      if(this.state.input === this.state.question.a[i]){
        this.setState({check: 'Riktig!'})
        this.setState({disabled: true})
        this.props.updateScore()
        console.log('handleAnswer Riktig')
        return
      } else {
        this.setState({check: 'Prøv igjen.'})
        console.log('handleAnswer prøv igjen')
      }
    }
  }

  render() {
    console.log('this.state.question qcontainer.js')
    console.log(this.state.question)
    return(
        <div style={{padding: '5px'}}>
          <label className='questiontext' style={{paddingRight: '10px'}}>{this.state.question.q}</label>
          <input disabled={this.state.disabled} className='answerbox' onChange={this.handleInput}></input>
          <button disabled={this.state.disabled} onClick={this.handleAnswer}>Sjekk svar</button>
          <label  style={{padding: '10px'}} className='checklabel'>{this.state.check}</label>
        </div>
    )
  }

}
