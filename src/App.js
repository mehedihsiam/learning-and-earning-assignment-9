import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Trainers from './components/Trainers/Trainers';
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Banner></Banner>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/courses'>
          <Courses></Courses>
        </Route>
        <Route path='/trainers'>
          <Trainers></Trainers>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <footer>
        <Footer></Footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
