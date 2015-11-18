var Loop = require("<scripts>/util/Loop");
var Random = require("<scripts>/util/RandomInRange");

var Ball = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      x: Random(100, window.innerWidth),
      y: Random(100, window.innerHeight),
      vx: 150,
      vy: 150,
      diameter: 40
    };
  },
  handleResize: function(e) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    Loop(function(tick) {
      this.setState({
        x: this.state.x + (this.state.vx * tick),
        y: this.state.y + (this.state.vy * tick)
      });

      if(this.state.x < 0 || (this.state.x + this.state.diameter) > this.state.windowWidth) {
        this.setState({
          vx: this.state.vx * -1
        });
      }

      if(this.state.y < 0 || (this.state.y + this.state.diameter) > this.state.windowHeight) {
        this.setState({
          vy: this.state.vy * -1
        });
      }
    }.bind(this));
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render: function() {
    var style = {
      width: this.state.diameter,
      height: this.state.diameter,
      top: this.state.y,
      left: this.state.x,
      position: "absolute",
      backgroundColor: "red",
      borderRadius: "50%",
    };
    return (
      <div style={style}></div>
    );
  }
});

module.exports = Ball;
