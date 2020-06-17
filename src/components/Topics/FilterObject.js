import React, {Component} from 'react';

export default class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      employees: [
        { 
          name: 'Jordo Wiebo',
          title: 'dad',
          age: 28,
        },
        {
          name: 'Darth Maul',
          title: 'face painter',
          horns: true
        },
        {
          name: 'Donald Trump',
          title: 'Prez'
        },
      ],

      userInput: '',
      filteredEmployees: []
    }

  }
  handleChange(val) {
  this.setState({userInput: val});
  }
  
  filteredEmployees(prop){
    let employees = this.state.employees;
    let filteredEmployees = [];

    for(let i = 0; i < employees.length; i++){
      if (employees[i].hasOwnProperty(prop)){ 
        filteredEmployees.push(employees[i]);       
      }
    }
  }

  render() {
    return (
      <div className='puzzlebox filterObjectPB'>
      <h4>Filter Object</h4>
      <span className='puzzleText'> Original: {JSON.stringify(this.state.employees, null, 10)} </span>
      <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
      <button className='confirmationButton' onChange={() => this.filteredEmployees(this.state.userInput)}>Filter</button>
      <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
      </div>
    )
  } 
}