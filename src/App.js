import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './App.css';

function App() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div className="container">
      <div className="container-form">
        <form>
          <div className="credit-card">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
          <div className="input-form">
            <input
              type='tel'
              name='number'
              placeholder='Número do cartão'
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />

            <input
              type='text'
              name='name'
              placeholder='Nome do titular'
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />

            <div className="input-group">
              <input
                type='text'
                name='expiry'
                placeholder='MM/AA Validação'
                value={expiry}
                onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
              />

              <input
                type='tel'
                name='cvc'
                placeholder='CVV'
                value={cvc}
                maxLength={3}
                onChange={e => setCvc(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
              />
            </div>
          </div>
        </form>

      </div>

    </div>
  );
}

export default App;
