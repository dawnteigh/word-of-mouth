import '../css/App.css';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Button, Header, Icon, Modal, Divider, Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import Reviews from './Reviews';
import ReviewNew from './ReviewNew'
import MealFind from './MealFind';
import Meal from './Meal'
import WordOfMouth from '../WordOfMouth.png'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, addUserReview, resetSessErrors } from '../features/sessionsSlice'
import { fetchMeals, resetReview, resetMealErrors } from '../features/mealsSlice'
import { fetchRestaurants, setRestaurant, resetRestErrors } from '../features/restaurantsSlice'


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const review = useSelector(state => state.meals.newReview)
  const loading = useSelector(state => state.sessions.status === "loading" ? true : false)
  const errors = useSelector(state => state.sessions.errors.concat(state.meals.errors, state.restaurants.errors))
  
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchMeals())
      dispatch(fetchRestaurants())
    }
  }, [loggedIn, dispatch])

  useEffect(() => {
    if (review) {
      dispatch(addUserReview(review))
      dispatch(resetReview())
      dispatch(setRestaurant(null))
      navigate("/myreviews")
    }
  }, [review, dispatch])

  useEffect(() => {
    if (errors[0]) {
      setOpen(true)
    }
  }, [errors[0]])

  const displayErrors = errors.map((e, i) => <li key={i} >{e}</li>)
  const handleClick = () => {
    setOpen(false)
    dispatch(resetMealErrors())
    dispatch(resetSessErrors())
    dispatch(resetRestErrors())
  }

  return (
    <div className="App">
      {
      loading ?
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>:
      <>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
        >
          <Header icon>
            <Icon color='yellow' name='exclamation triangle' />
            Your request could not be completed. Here's why:
          </Header>
          <Modal.Content>
            <ul>
              {displayErrors}
            </ul>
          </Modal.Content>
          <Modal.Actions>
            <Button color='yellow' inverted onClick={() => handleClick()}>
              <Icon name='checkmark' /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
        {
          (!loggedIn && !loading) ?
          <div className="App" id="login" >
            <img src={WordOfMouth} alt="Word of Mouth" />
            <Segment raised>
              <Grid columns={2}>
                <Grid.Column>
                  <Login />
                </Grid.Column>
                <Grid.Column>
                <Signup />
                </Grid.Column>
              </Grid>
              <Divider vertical>OR</Divider>
            </Segment>
          </div> :
          <>
            <NavBar />
            <div className='underNav'>
              <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/review" element={ <ReviewNew /> } />
                <Route path="/meals" element={ <MealFind /> } />
                <Route path="/meals/:mealId" element={ <Meal /> } />
                <Route path="/myreviews" element={ <Reviews /> } />
              </Routes>
            </div>
          </>
        }
      </>
      }
    </div>
  );
}

export default App;
