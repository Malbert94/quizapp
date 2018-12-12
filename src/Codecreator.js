import React from 'react';

export class Codecreator extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      code: '',
      t: 'test',
      q: '',
      a: [],
      i: ''
    }
  }

  addQuestion(){
    
  }

  handleInput(){

  }

  render(){
    return(
      <div>
        <div className='questionAdder'>
          <label >Legg til spørsmål:  </label>
          <input ></input>
          <button >Legg til</button>
        </div>
        <pre>
          <code>
            <p style={{backgroundColor: 'lightgray'}}>
{`  {
    t: '${this.state.t}',
    q: '${this.state.q}',
    a: ['cellemembran', 'ribosomer', 'cellekjernen', 'endoplasmatiskretikulum', 'mitokondrier', 'lysosomer', 'golgiapparat'],
    i: 'https://www.free-anatomy-quiz.com/pics/general/cell.jpg'
  },`}
            </p>
          </code>
        </pre>
      </div>
    )
  }
}
