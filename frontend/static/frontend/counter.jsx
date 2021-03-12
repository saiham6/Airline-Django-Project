class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}! </h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      response: "",
      count: 12,
      score: 0,
    };
  }

  render() {

    if (this.state.score === 10){
      return (
        <div id ="winner"> You Won!! </div>
      )
    }

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.count}>
          Count
        </button>
        <Hello name="Harry" />
        <div>
          <div id="problem">
            {this.state.num1} + {this.state.num2}
          </div>
          <input
            onKeyPress={this.inputKeyPress}
            onChange={this.updateResponse}
            value={this.state.response}
          />
          <h3>Score: {this.state.score}</h3>
        </div>
      </div>
    );
  }

  inputKeyPress = (event) => {
    // Check if the Enter key was pressed
    if (event.key === "Enter") {
      // Extract answer
      const answer = parseInt(this.state.response);

      // Check if answer is correct
      if (answer === this.state.num1 + this.state.num2) {
        this.setState((state) => ({
          score: state.score + 1,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: "",
        }));
      } else {
        if (this.state.score >= 1) {
          this.setState((state) => ({
            score: state.score - 1,
            response: "",
          }));
        } else {
          this.setState(() => ({
            response: "",
          }));
        }
      }
    }
  };

  updateResponse = (event) => {
    this.setState({
      response: event.target.value,
    });
  };

  count = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
}

ReactDOM.render(<App />, document.querySelector("#app"));
