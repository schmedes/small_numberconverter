import React, {Component} from 'react';
// stateless function introduced in react 0.14
const NumberInput = (props) =>
 <div className="numberinput"><label htmlFor={"base_" + props.base}>{"Base " + props.base}</label><input type="text" id={"base_" + props.base} value={props.number} onChange={(event)=> props.changeFunction(event, props.base)}></input></div>;

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
