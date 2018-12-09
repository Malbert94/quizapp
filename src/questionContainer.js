import React from 'react';
import './App.css';

export class QuestionContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = { input: '',
    check: '',
    question: this.props.question,
    disabled: false,
    answered: []
  }

    this.handleInput = this.handleInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  //Lagrer det som blir skrevet i state og fjerner alle mellomrom
  handleInput(event){
    this.setState({input: event.target.value});
    this.checkAnswer(event.target.value.toLowerCase().trim().replace(/\s/g,''));
    console.log(this.state.input)
  }

  //Sjekker om svaret i state stemmer med noen av fasitsvarene.
  //Hvis den finner et riktig svar låses sprøsmålet, updateScore kalles på og loopen stoppes
  checkAnswer(answer){
    console.log('handleAnswer called')
      for(let i =0; i < this.state.question.a.length; i++){
      if(answer === this.state.question.a[i]){
        this.setState({check: 'Riktig!'})
        this.setState({input: ''})
        if(this.state.answered.indexOf(answer) > -1 === false) {
          this.setState({answered: [...this.state.answered, answer]})
          this.props.updateScore()
        }
        //this.setState({disabled: true})

        console.log('handleAnswer Riktig')
        return
      } else {
        this.setState({check: 'Prøv igjen.'})
        console.log('handleAnswer prøv igjen')
      }
    }
  }

  //gjør at du kan trykke enter for å sjekke svaret
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) {
      this.checkAnswer()
    }
  }

  render() {
    console.log('this.state.question qcontainer.js')
    console.log(this.state.question)
    return(
        <div style={{padding: '5px'}}>

          <label
            className='questiontext'
            style={{paddingRight: '10px'}}>
            {this.state.question.q}
          </label>
          <input
            value={this.state.input}
            disabled={this.state.disabled}
            className='answerbox'
            onChange={this.handleInput}
            onKeyPress={this.enterPressed.bind(this)}>
          </input>
          <button
            disabled={this.state.disabled}
            onClick={this.checkAnswer}>
            Sjekk svar
          </button>
          <label
            style={{padding: '10px'}}
            className='checklabel'>
            {this.state.check}
          </label>
          <div>
            <ul className='answerList' style={{color: '#00830D'}}>
              {this.state.answered.map((answer, idx) =>
              <li
              key={idx}>
              {answer}
              </li>)}
            </ul>
          </div>
        </div>
    )
  }

}
