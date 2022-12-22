import './App.css';
import React, { useState } from 'react';


function App() {

  // Declare state variables
  const [V_grid, setVGrid] = useState('');
  const [V_A, setVA] = useState('');
  const [V_B, setVB] = useState('');
  const [V_C, setVC] = useState('');
  const [V_D, setVD] = useState('');
  const [Slope, setSlope] = useState('');
  const [V_Base, setVBase] = useState('');
  const [Q_out, setQOut] = useState('');


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

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

    // Reset form
    setVGrid('');
    setVA('');
    setVB('');
    setVC('');
    setVD('');
    setSlope('');
    setVBase('');
  };

  return (
    <div className="App">
      <h1>
        Calculate VSlope
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="V_grid" className='form-label'>V_grid:</label>
        <input
          type="text"
          id="V_grid"
          value={V_grid}
          onChange={(event) => setVGrid(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_A" className='form-label'>V_A:</label>
        <input
          type="text"
          id="V_A"
          value={V_A}
          onChange={(event) => setVA(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_B" className='form-label'>V_B:</label>
        <input
          type="text"
          id="V_B"
          value={V_B}
          onChange={(event) => setVB(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_C" className='form-label'>V_C:</label>
        <input
          type="text"
          id="V_C"
          value={V_C}
          onChange={(event) => setVC(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="V_D" className='form-label'>V_D:</label>
        <input
          type="text"
          id="V_D"
          value={V_D}
          onChange={(event) => setVD(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="Slope" className='form-label'>Slope:</label>
        <input
          type="text"
          id="Slope"
          value={Slope}
          onChange={(event) => setSlope(event.target.value)}
          className='form-input'
        />
        <br />
        <label htmlFor="VBase" className='form-label'>VBase:</label>
        <input
          type="text"
          id="VBase"
          value={V_Base}
          onChange={(event) => setVBase(event.target.value)}
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
