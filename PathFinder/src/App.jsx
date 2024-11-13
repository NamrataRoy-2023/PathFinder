import { useState } from 'react'
import { Button } from './Components/ui/button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome Here</h2>
      <Button>Subscribe</Button>
    </>
  )
}

export default App
