import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal()
        }
    }))
    
    return (
    <dialog ref={dialog}>
        <Card>
            <CardHeader>
                <CardTitle>
                    <h2>Your {result}</h2>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stop the timer with <strong>X seconds left</strong>.</p>
            </CardContent>
            <CardFooter>
                <form method="dialog">
                    <Button>Close</Button>
                </form>
            </CardFooter>            
        </Card>       
    </dialog>
    )
    }
)


export default ResultModal