import React, { useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import ResultModal from './ResultModal'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef<NodeJS.Timeout | undefined>()
    const dialog = useRef<HTMLDialogElement | undefined>()

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            setTimerStarted(false)
            dialog.current.showModal()
        }, targetTime * 1000)
        setTimerStarted(true)
    }

    function handleStop() {
        setTimerStarted(false)
        clearTimeout(timer.current)
    }

    return (
        <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <Card className='text-center'>
        {timerExpired && <p>Time is up!</p>}
        <CardHeader className='text-center'>
            <CardTitle>{ title }</CardTitle>
        </CardHeader>
        <CardContent>
            <p>
                { targetTime} second{targetTime > 1 ? 's' : ''} 
            </p>
            <div>
                <Button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'}</Button>
            </div>
        </CardContent>
        <CardFooter>
            <p>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
        </CardFooter>
      </Card>
      </>
    )
  
}
