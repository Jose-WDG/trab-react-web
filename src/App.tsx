import { useState } from 'react'
import './styles/App.css'
import jose from './assets/jose-ramalho.jpg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <img src={jose} alt="Minha Figura"/>
      <h1>José Ramalho da silva neto</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

