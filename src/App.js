import './App.css';
import { Home } from './Components/Home';
import { Route , Routes } from 'react-router-dom';
import {Navbar} from './Components/Navbar';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
        
    </div>
  );
}

export default App;
