/* Basic example demonstrating input - using stateful components */
class BasicCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
      this.changeState = this.changeState.bind(this);
      this.changeDirection = this.changeDirection.bind(this);
    this.state = {
      userInput: 0,
      timer: 0,
      direction: 'Up'
    };
  }
  changeState(i){
      this.setState({timer: i});
      console.log(this.state.timer);
  }
  changeDirection(i){
      this.state.direction==i;
  }
  handleChange(e) {
      let i = 0;
      var _this = this;
      //while(i < e.target.value){
      if(this.state.direction=='Up'){
          var x = e.target.value;
          setInterval( function(){
              if(i < x){
                  i ++;
                  _this.changeState(i);
                  console.log(i);
              }
          },
            1000
          );
      }
      
      if(this.state.direction=='Down'){
          var x = e.target.value;
          setInterval( function(){
              if(x>0){
                  x--;
                  _this.changeState(x);
                  console.log(x);
              }
          },
            1000
          );
      }
  }
  render() {
    return (
      <div>
          <p>
            Please enter your time in miliseconds
          </p>
          <input onChange={this.handleChange}/>
        <input
          type="radio"
          value="Up"
          name="answer"
          checked={this.state.direction === 'Up'}
          onChange={(e) => this.changeDirection('Up')}
        />
        <input
          type="radio"
          value="Down"
          name="answer"
          checked={this.state.directive === 'Down'}
          onChange={(e) => this.changeDirection('Down')}
        />
          <p>
            Timer: {this.state.timer}
          </p>
      </div>
    ); 
  }
}

const renderBasicCounter = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicCounter/>
    </div>,
    document.getElementById('root')
  );
};

addLink("Counter", renderBasicCounter);