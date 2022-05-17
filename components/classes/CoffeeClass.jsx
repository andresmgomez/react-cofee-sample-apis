import React from 'react'

class CoffeeClass extends React.Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick;
      this.state = {
         count: 0,
      }
   }

   handleClick() {
      this.setState({count: this.state.count + 1})

   }
   render() {
      const { firstName } = this.props
      const { count } = this.state
      return (
         <>
         <h1>Hello, {firstName}</h1>
         <p>You cicked this button {count} times.</p>
         <button onClick={() => this.handleClick()}>Click Me</button>
         </>
      )
   }

}

export default CoffeeClass