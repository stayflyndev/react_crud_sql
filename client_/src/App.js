import logo from './logo.svg';
import './App.css';
import SignIn from './components/Login/Login.jsx'
import Home from './components/Pages/Home.jsx'
 import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/home' element={<Home/>} />

          
        </Routes>
      
      </header>
    </div>
  );
}

export default App;
