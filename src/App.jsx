import { useState } from 'react'

import './App.css'

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  let calcBmi = (e) => {

    if (weight === 0 || height === 0) {
      alert("Enter your valid weight and height");
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are under weight");

      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage("you are healthy");
      }
      else {
        setMessage("Thank you for visting");
      }
    }
  }
  let reload = () => {
    window.location.reload()
  }


  return (
    <>
      <div className='main'>
        <div>
          <h1>Bmi Calculator</h1>
          <div className='container'>
            <form onSubmit={calcBmi}>
              <label>Weight in LBS</label>
              <input type="text" placeholder='Enter your weight here!'
                value={weight}
                className='input'
                onChange={(e) => setWeight(e.target.value)} />
            </form>
          </div>
          <div className='container'>
            <form onSubmit={calcBmi}>
              <label>Height in Feet</label>
              <input type="text"
                placeholder='Enter your Height here!'
                value={height}
                className='input'
                onChange={(e) => setHeight(e.target.value)} />
            </form>
          </div>
          <div>
            <button className='btn'
              type='submit'
              onClick={calcBmi}
            >submit</button>
            <button className='btn1'
              type='submit'
              onClick={reload}
            >Reload</button>
          </div>
          <div className='small'> 
            <h2>your Bmi is :{bmi} </h2>
            <p>{message} </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
