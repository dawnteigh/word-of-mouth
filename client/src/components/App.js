import '../css/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import ReviewNew from './ReviewNew'
import UserProfile from './UserProfile'
import Meals from './Meals';
import Meal from './Meal'

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
        <Route path="/" element={ <Home />} />
        <Route path="/review" element={ <ReviewNew /> } />
        <Route path="/:username" element={ <UserProfile /> } />
        <Route path="/meals" element={ <Meals /> } />
        <Route path="/meals/:mealId" element={ <Meal /> } />
      </Routes>
    </div>
  );
}

export default App;
