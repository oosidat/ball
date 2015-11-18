var Ball = require("<scripts>/components/Ball");

var Game = React.createClass({
    render: function() {
        return (
          <div>
            <Ball/>
            <Ball/>
            <Ball/>
            <Ball/>
          </div>
        );
    }
});

module.exports = Game;
