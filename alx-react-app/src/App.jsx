
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  

  return (
    <>
    <WelcomeMessage />  
        <Header />
        <MainContent />
        <UserProfile name= "Pokah" age="35" bio= "Loves hiking and photography"/>
        <UserProfile name= "Oluwatobi" age="25" bio= "Writing and singing"/>
        <Footer />
    </>
  )
}

export default App
