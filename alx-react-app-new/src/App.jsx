import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
