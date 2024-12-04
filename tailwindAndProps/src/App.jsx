import './App.css'
import Card from './components/card'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-500 text-blue-500 p-4 rounded-xl justify-center text-center'>working with tailwind</h1>
      <Card itemName="jumpsuits" Price="$20"/>
      <Card />
    </>
  )
}

export default App
