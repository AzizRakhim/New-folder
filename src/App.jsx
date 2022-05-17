
import { Component } from 'react';
import './App.css';
import Char from './components/Char';
import Validation from './components/Validation';

class App extends Component{
  constructor() {
    super();
    this.state ={
      count : 1,
      userInput : ""
    }
  }

  inputChangeHandler = (evt) => {
    this.setState({
      userInput : evt.target.value
    })
  }

  deleteCharHandler = (props) => {
    const text = this.state.userInput.split("");
    text.splice(props.index, 1);
    
    const updateText = text.join("");

    this.setState({
      userInput : updateText
    })
  }

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}
      />
    })
    return (
      <div className="App">
        <h1>
          Hello Adobe {this.state.count}
        </h1>
        <input 
          type="text" 
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
