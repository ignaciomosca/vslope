import './App.css';
import React, { useState } from 'react';


function App() {

  // Declare state variables
  const [V_Base, setVBase] = useState('');
  const [Slope, setSlope] = useState('');
  const [Hysteresis, setHysteresis] = useState('');
  const [V_grid, setVGrid] = useState('');
  const [V_N, setVN] = useState('');
  const [V_A, setVA] = useState('');
  const [V_B, setVB] = useState('');
  const [V_C, setVC] = useState('');
  const [V_D, setVD] = useState('');
  const [Q_out, setQOut] = useState('');



  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setVBase(86602.5);
    setVB(V_N - Hysteresis/2);
    setVC(V_B + Hysteresis);
    setVA(V_B - Slope*V_Base);
    setVD(V_C + Slope*V_Base);

    // Implement the algorithm here using the form values
    if (V_grid < V_A) {
      setQOut(1);
    } else if (V_grid < V_B) {
      setQOut((V_B - V_grid) / (Slope * V_Base));
    } else if (V_grid < V_C) {
      setQOut(0);
    } else if (V_grid < V_D) {
      setQOut((V_C - V_grid) / (Slope * V_Base));
    } else {
      setQOut(-1);
    }
    

  };

  return (
    <div className="App">
      <h1>
        Calculate VSlope
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Slope (between 0.04 and 0.07)" className='form-label'>Slope:</label>
        <input
          type="text"
          id="Slope"
          value={Slope}
          onChange={(event) => setSlope(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="Hysteresis (between 0 and 200)" className='form-label'>Hysteresis:</label>
        <input
          type="text"
          id="Hysteresis"
          value={Hysteresis}
          onChange={(event) => setHysteresis(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_grid" className='form-label'>V_grid:</label>
        <input
          type="text"
          id="V_grid"
          value={V_grid}
          onChange={(event) => setVGrid(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_N" className='form-label'>V_N:</label>
        <input
          type="text"
          id="V_N"
          value={V_N}
          onChange={(event) => setVN(event.target.value)}
          className='form-input'
        />
        <br />
        <br />
        <label htmlFor="Qout" className='form-label'>Qout:</label>
        <input
          type="text"
          id="Qout"
          value={Q_out}
          onChange={(event) => setQOut(event.target.value)}
          className='form-input'
        />
        <br />
        <button type="submit" className='form-button'>Calculate Q_out</button>

      </form>
    </div>
  );
}

export default App;