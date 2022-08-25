import { useState } from 'react'
import './App.css'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import CardsToDo from './components/CardsToDo'
import Input from './components/Input'

function App() {
  const [arrayTodos, setTodos] = useState([])
  const [isEmpty, setErrorInput] = useState(false)
  const [hp, setHT] = useState('')
  const handleClick = (e) => {
    e.preventDefault();
    const inputText = document.querySelector('#inputText')
    if(isEmpty) setErrorInput(false), setHT('')
    if(!inputText.value) {
      setHT('No puede estar vacío')
      setErrorInput(true)
      return
    }
    setTodos([...arrayTodos, inputText.value])
    inputText.value = null
  }

  return (
    <div className="App">
      <Container>
        <Typography sx={{fontWeight: 600, color: '#252525'}} my={5} align='center' variant='h2'>Coolest To Do</Typography>
        <Input error={isEmpty} handleClick={handleClick} hp={hp}/>
        <hr />
        <CardsToDo todos={arrayTodos} />
      </Container>
    </div>
  )
}

export default App
