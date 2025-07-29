import './App.css'
import Search from './components/Search'

const App = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search/>
    </div>
  )
}

export default App