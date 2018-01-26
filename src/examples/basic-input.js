/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      userInput: ''
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  additem() {
      console.log("message");
      let theitem = document.getElementById("theinput").value;
      $("#thelist").append("<li>"+theitem+"</li>");
  }
  render() {
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input id="theinput" onChange={this.handleChange}/>
          <button value="add" onClick={this.additem}>ADD</button>
          <p>
            You entered: {this.state.userInput}
          </p>
        
            <ul id="thelist">
            </ul>
      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};
