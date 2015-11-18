var AddBall = React.createClass({
  render: function() {
    return(
      <button className="addBall" onClick={this.props.onClick} title="Add Ball">+</button>
    )
  }
});

module.exports = AddBall;
