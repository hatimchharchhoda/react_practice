import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("pink")

  return (
      <div className='w-full h-screen duration-100' 
      style={{backgroundColor:Color}}>
        <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{backgroundColor: "yellow"}} onClick={() => setColor('yellow')} >Yellow</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{backgroundColor: "blue"}} onClick={() => setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{backgroundColor: "grey"}} onClick={() => setColor('grey')}>Grey</button>
            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{backgroundColor: "black"}} onClick={() => setColor('black')}>Black</button>
          </div>
        </div>
      </div>
  )
}

export default App