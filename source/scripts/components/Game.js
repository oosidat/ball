var AddBall = require("<scripts>/components/AddBall");
var Ball = require("<scripts>/components/Ball");

var Game = React.createClass({
  getInitialState: function() {
    return {balls: 0};
  },
  handleAdd: function() {
    this.setState({balls: this.state.balls + 1});
    console.log(this.state.balls);
  },
  render: function() {
    var balls = [];
    for(var i = 0; i < this.state.balls; i++) {
      balls.push(<Ball/>);
    }
    return (
      <div>
        <AddBall onClick={this.handleAdd}></AddBall>
        {balls}
      </div>
    );
  }
});

module.exports = Game;
