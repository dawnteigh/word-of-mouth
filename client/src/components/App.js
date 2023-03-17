import '../css/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <div className="App">
      {/* render if no user */}
      <Login />
      <Signup />
      {/* render if user */}
      <NavBar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
