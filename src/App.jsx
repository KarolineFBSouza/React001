import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Contadora React</h1>
        <button className='botao' onClick={() => setValue(value + 1)}>
          Adição
        </button>
        <button className='botao' onClick={() => setValue(value - 1)}>
          Subitração
        </button>
        <button className='botao' onClick={() => setValue(0)}>
          Resetar
        </button>
      </div>
    </>
  )
}

export default App
