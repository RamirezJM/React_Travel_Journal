import Header from './components/Header'
import Card from './components/Card'
import travelData from './data/data.json'
import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <main>
      <Card data={travelData}/>
    </main>
      
    </>
  )
}

export default App
