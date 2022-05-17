import React, { useEffect, useState } from 'react'

function CoffeeList() {
   const [coffeeList, setCoffeeList] = useState([]);
   const [typeCoffee, setTypeCoffee] = useState('hot')

   useEffect(() => {
      fetch(`https://api.sampleapis.com/coffee/${typeCoffee}`)
      .then(response => response.json())
      .then(data => setCoffeeList(data))
      // .then(setCoffeeList)
      .catch(console.error)
   }, [typeCoffee])

   // console.log(coffeeList)
   console.log({coffeeList})
   return (
      <>
         {!coffeeList 
         ? <h2>Loading...</h2> 
         :  <>
               <h2>Coffee List</h2>
               <button onClick={() => setTypeCoffee('hot')}>Hot Coffee</button>
               <button onClick={() => setTypeCoffee('iced')}>Iced Coffee</button>
               {coffeeList.map(coffee => {
                  return <p key={coffee.id}>{coffee.title}</p>
               })}
            </>
         }
      </>
   )
}

export default CoffeeList