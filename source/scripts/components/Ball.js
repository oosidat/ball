var Loop = require("<scripts>/util/Loop");

var Ball = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      x: 100,
      y: 100,
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

      if(this.state.x < 0 || (this.state.x + this.state.diameter) > this.state.windowHeight) {
        this.setState({
          vx: this.state.vx * -1
        });
      }

      if(this.state.y < 0 || (this.state.y + this.state.diameter) > this.state.windowWidth) {
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
      position: "absolute",
      top: this.state.x,
      left: this.state.y,
      backgroundColor: "red",
      borderRadius: "20px",
    };
    return (
      <div style={style}></div>
    );
  }
});

module.exports = Ball;
