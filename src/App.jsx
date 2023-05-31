import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import data from './assets/data'

function App() {
 
  const [dataReview, setDataReview] = useState(data)
  const [number, setNumber] = useState(0)

  const increase = () =>{
    setNumber(oldNumber => {
      if(oldNumber < 3) {
        return oldNumber + 1
      } else if(oldNumber === 3) {
        return oldNumber = 3
      }
    })
  }

  const decrease =() => {
    setNumber(oldNumber => {
       if (oldNumber > 0) {
         return oldNumber - 1;
       } else if (oldNumber === 0) {
         return (oldNumber = 0);
       }
    })
  }

  const getRandomNumber =()=>{
    let randomNumber = Math.floor( Math.random() * dataReview.length)
    setNumber(randomNumber)
  }

  return (
    <main>
     <Cards random={getRandomNumber} next={increase} before={decrease} data={dataReview[number]}/>
    </main>
  )
}

export default App
