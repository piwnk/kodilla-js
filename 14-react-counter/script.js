const Counter = React.createClass({

   propTypes: {
      nr: React.PropTypes.number.isRequired
   },

   getDefaultProps() {
      console.log('Getting deafult props');
   },

   // getInitialState: function () {
   getInitialState() { // object-shorthand
      console.log('Getting initial state');
      return {
         counter: 0
      };
   },

   componentWillMount() {
      console.log('Component will mount');
   },

   componentDidMount() {
      console.log('Component did mount');
   },

   // increment: function () {
   increment() { // object-shorthand
      this.setState({
         counter: this.state.counter + 1
      });
   },

   decrement() {
      this.setState({
         counter: this.state.counter - 1
      });
   },

   // render: function () {
   render() { // object-shorthand
      console.log('Rendering');
      return (
         React.createElement(
            'div',
            { className: 'wrp' },
            React.createElement(
               'span',
               {},
               // 'Licznik: ' + this.state.counter
               // `Licznik nr ${this.props.nr}: ${this.state.counter}`
               React.createElement(
                  'p',
                  {},
                  `Licznik nr ${this.props.nr}: `
               ),
               React.createElement(
                  'p',
                  {},
                  this.state.counter
               )
            ),
            React.createElement(
               'button',
               {
                  className: 'btn',
                  onClick: this.increment,
               },
               '+'
            ),
            React.createElement(
               'button',
               {
                  className: 'btn',
                  onClick: this.decrement
               },
               '-'
            )
         )
      );
   }
});

const element = React.createElement(
   'div', 
   {},
   React.createElement(Counter, { nr: 1 }),
   React.createElement(Counter, { nr: 2 }),
   React.createElement(Counter, { nr: 3 })
);
ReactDOM.render(element, document.getElementById('app'));