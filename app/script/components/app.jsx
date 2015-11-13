import React, {Component} from 'react';
import {NumberInput} from 'functions.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

 changeInput(event, base) {
   // parseInt catches invalid input
   const input = parseInt(event.target.value, base);
    // on clear input set state to 0
   if (isNaN(input)) {
     this.setState({number: 0});
   } else {
     this.setState({number: parseInt(event.target.value, base)});
   }
 }

  render() {
    return (
      <div className="content">
      <NumberInput base = {2} number = {this.state.number.toString(2)} changeFunction ={this.changeInput.bind(this)} />
      <NumberInput base = {8} number = {this.state.number.toString(8)} changeFunction ={this.changeInput.bind(this)} />
      <NumberInput base = {10} number = {this.state.number.toString(10)} changeFunction ={this.changeInput.bind(this)} />
      <NumberInput base = {16} number = {this.state.number.toString(16)} changeFunction ={this.changeInput.bind(this)} />
      </div>
    );
  }
}
