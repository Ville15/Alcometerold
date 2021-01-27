
import './App.css';
import {useState} from 'react';

function App() {
const [weight, setWeight] = useState(90);
const [bottles, setBottles] = useState(1);
const [gender, setGender] = useState('male');
const [time, setTime] = useState(0)
const [alcometer, setAlcometer] = useState(0);

function handleSubmit(e) {
  e.preventDefault();
  let alcometer = 0
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let grams2 = grams - (burning * time)
  if (gender === 'male') {
    alcometer = grams2 / (weight * 0.7)
  }
  else {
    alcometer = grams2 / (weight * 0.6)
  }
  setAlcometer(alcometer);
}


return (
  <div className="container" style={{marginTop: 30}}>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Weight</label>
      <input className="form-control" type="number" step="1" value={weight}
       onChange={e => setWeight(e.target.value)}></input>
    </div>
    <div className="form-group">
      <label>Bottles</label>
      <input className="form-control" type="number" value={bottles} onChange={e => setBottles(e.target.value)}>

      </input>
    </div>
    <div className="form-group">
      <label>Time</label>
      <input className="form-control" type="number" value={time} onChange={e => setTime(e.target.value)}>

      </input>
    </div>
    <div className="form-group">
      <label>Gender</label>
      <div>
      <label style={{marginRight: 10}}><input name="gender" type="radio" value="male" defaultChecked
       onChange={e => setGender(e.target.value)}></input>Male</label>

      <label><input name="gender" type="radio" value="female"
       onChange={e => setGender(e.target.value)}></input>Female</label>
       </div>
    </div>
    <div className="form-group">
      <label></label>
      <output>{alcometer.toFixed(2)}</output>
    </div>
    <button className="btn btn-primary">Calculate</button>
    </form>
  </div>
);
}

export default App;