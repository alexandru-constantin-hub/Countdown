import React from 'react'
import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <div className='p-10 max-w-[75%] m-auto'>
       <Player />
       <div className='grid grid-rows-2 grid-flow-col gap-4 mt-4'>
        <TimerChallenge title='Easy' targetTime={1} />
        <TimerChallenge title='Medium' targetTime={5} />
        <TimerChallenge title='Hard' targetTime={10} />
        <TimerChallenge title='Pro' targetTime={15} />
       </div>
    </div>
  )
}

export default App;
