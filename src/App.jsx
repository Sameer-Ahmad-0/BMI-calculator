import { useState } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");


  let calcBmi = (e) => {

    if (!weight  || !height) {
      alert("Enter your valid weight and height");
    } else {
      let bmi = weight / (height * height);
      console.log("bmi" , bmi)

      setBmi(bmi.toFixed(2));

      if (Bmi <18) {
        setMessage("you are under weight");
      } else if (Bmi >= 19 && bmi <25) {
        setMessage("you are healthy");
      } else {
        setMessage("you are over weight"); 
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };

  const heightInMeters = height * 0.3048;
    let Bmi = weight / (heightInMeters * heightInMeters);

  return (
    <>
      <div className="main">
        <div>
          <h1>Bmi Calculator</h1>
          <div className="container">
            <form onSubmit={(e)=>
              {e.preventDefault() 
              calcBmi(e)}}>
              <label>Weight in KG </label>
              <input
                type="number"
                placeholder="Enter your weight here!"
                defaultValue={0}
                className="input"
                onChange={(e) => setWeight(e.target.value)}
              />
              <label>Height in Feet</label>
              <input
                type="number"
                placeholder="Enter your Height here!"
                defaultValue={0}
                className="input"
                onChange={(e) => setHeight(e.target.value)}
              />
              <button className="btn" type="submit"  >
              submit
            </button>
            <button className="btn1" type="submit" onClick={reload}>
              Reload
            </button>
            
            </form>
          </div>
          <div>
          
            
          </div>
          <div className="small">
            <h2>your BMI is :{Bmi} </h2>
            <p>{message} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
