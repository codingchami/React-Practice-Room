import './App.css';
import Home from './pages/Home.js'

function App() {
  let firstName = "Chamith";
  let lastName= "Wijewantha";
  let age= "50";
  return (
    <>
      <Home firstName={firstName} lastName={lastName} age={age}></Home>
    </> 
  );
}

export default App;
