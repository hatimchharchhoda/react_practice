import { useCallback, useEffect, useState , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [specialChar, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(specialChar) str += "!@#$%^&*(){}[]<>?"

    for(let i =1; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,number,specialChar])

  const CopyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()},[length,number,specialChar,passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-3 py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden py-2'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
            placeholder='password'
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={CopyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {setNumber((prev) => !prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={specialChar}
              onChange={() => {setChar((prev) => !prev)}}
            />
            <label>SpecialChar</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
