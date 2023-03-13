import '../css/App.css';
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
    </div>
  );
}

export default App;
