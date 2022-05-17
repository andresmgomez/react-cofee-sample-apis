import React, { useState } from 'react'

function CoffeeList({firstName}) {
   const [count, setCount] = useState(0)

   const handleIncrement = () => {
      setCount(count + 1)
   }
   return (
      <>
         <h1>Hello, {firstName}</h1>
         <h3>This button has been clicked {count} times.</h3>
         <button onClick={handleIncrement}>Click Me</button> 
      </>
   )
}

export default CoffeeList