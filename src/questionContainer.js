import React from 'react';
import './App.css';

export class QuestionContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = { input: '',
    check: '',
    answered: []
  }

    this.handleInput = this.handleInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  //Lagrer det som blir skrevet i state og fjerner alle mellomrom
  handleInput(event){
    this.setState({input: event.target.value});
    this.checkAnswer(event.target.value.toLowerCase().trim().replace(/\s/g,''));
    //console.log(this.state.input)
  }

  //Sjekker om svaret i state stemmer med noen av fasitsvarene.
  //Hvis den finner et riktig svar låses sprøsmålet, updateScore kalles på og loopen stoppes
  checkAnswer(answer){
      //console.log('handleAnswer called')
      for(let i =0; i < this.props.question.a.length; i++){
      if(answer === this.props.question.a[i]){
        this.setState({check: 'Riktig!'})
        this.setState({input: ''})
        if((this.state.answered.indexOf(answer) > -1) === false) {
          this.setState({answered: [...this.state.answered, answer]})
          this.props.updateScore()
        }
        //this.setState({disabled: true})
        //console.log('handleAnswer Riktig')
        return
      } else  {
        this.setState({check: ''})
      }
    }
  }

  render() {
    //console.log('this.props.question qContainer.js')
    //console.log(this.props.question)


    var list = this.props.question.a.map((answer, idx) =>{
      if((this.state.answered.indexOf(answer) > -1) === false){
        var visible = {visibility: 'hidden'}
      } else {
        var visible = {visibility: 'visible'}
      }
      return        <li
          style={visible}
          key={idx}>
          {console.log(this.props.question.n[idx])}
          {this.props.question.n[idx]}
          {'. '}
          {answer}
        </li>
      }
    )

    return(
        <div style={{padding: '5px'}}>
          <label
            className='questiontext'
            style={{paddingRight: '10px'}}>
            {this.props.question.q}
          </label>
          <input
            value={this.state.input}
            disabled={this.state.disabled}
            className='answerbox'
            onChange={this.handleInput}>
          </input>
          <label
            style={{padding: '10px'}}
            className='checklabel'>
            {this.state.check}
          </label>
          <div>
            <ul className='answerList' style={{color: '#00830D', listStyleType: 'none'}}>
              {list}
            </ul>
          </div>
        </div>
    )
  }
}
