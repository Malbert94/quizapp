import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';


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
      if(this.props.showAnswer === false){
        if((this.state.answered.indexOf(answer) > -1) === false){
          var visible = {visibility: 'hidden'}
        } else {
          var visible = {visibility: 'visible'}
        }
      }
      return        <li
          style={visible}
          key={idx}>
          {idx + 1 + '. ' + answer}
        </li>
      }
    )

    return(
        <div style={{padding: '5px'}}>
          <label
            className='questiontext'
            style={{paddingRight: '10px'}}>
            {this.props.question.q}:
          </label>
          <OutlinedInput
            value={this.state.input}
            disabled={this.state.disabled}
            className='answerbox'
            placeholder="Svar"
            onChange={this.handleInput}
            label='svar'>
          </OutlinedInput>
          <label
            style={{padding: '10px'}}
            className='checklabel'>
            {this.state.check}
          </label>
          <Button variant="contained" onClick={this.props.showAnswerFunc} >Vis fasit</Button>
          <div>
            <ul className='answerList' style={{color: '#00830D', listStyleType: 'none'}}>
              {list}
            </ul>
          </div>
        </div>
    )
  }
}
