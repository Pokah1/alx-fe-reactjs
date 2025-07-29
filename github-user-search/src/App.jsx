// import './App.css'
import Search from './components/Search'

const App = () => {
  return (
    <div  className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-white tracking-wide">GitHub User Search</h1>
      <Search/>
    </div>
  )
}

export default App