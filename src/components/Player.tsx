import React, { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function App() {
  const input = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState('')

  function submit() {
    setEnteredPlayerName((input.current as HTMLInputElement).value);
    (input.current as HTMLInputElement).value = ''
  }

  return (
    <div>
  <Card>
      <CardHeader className='text-center'>
        <CardTitle>Final Countdown</CardTitle>
        <CardDescription>Stop the timer once you estimate that time is up</CardDescription>
      </CardHeader>
      <CardContent className='text-center'>
        <p className='mb-10'>Welcome {enteredPlayerName}</p>
        <div className='flex mx-20 no-wrap'>
          <Input ref={input}  />
          <Button className='ml-5' onClick={submit}>Set Name</Button>
        </div>
      </CardContent>
  </Card>
  </div>

  )
}

export default App
