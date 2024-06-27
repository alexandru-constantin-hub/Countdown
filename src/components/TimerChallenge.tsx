import React, { useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import ResultModal from './ResultModal'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef<NodeJS.Timeout | undefined>()
    const modal = useRef<HTMLDialogElement | undefined>()

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            setTimerStarted(false)
            modal.current.open()
        }, targetTime * 1000)
        setTimerStarted(true)
    }

    function handleStop() {
        setTimerStarted(false)
        clearTimeout(timer.current)
    }

    return (
        <>
    <ResultModal ref={modal} targetTime={targetTime} result="lost" />
      <Card className='text-center'>
        <CardHeader className='text-center'>
            <CardTitle>{ title }</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-3">
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
