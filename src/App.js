import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import MoviesDetail from './component/moviedetails';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Movies from './component/movies';

class App extends React.Component {
  state = { 
    movies: {}
   }
  handleMovies = (movies)=>{
    // console.log("called"+movies);
    this.setState({movies:movies});
  }
  render() { 
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact render={(props)=><Home {...props} dMovies={this.handleMovies}/>} ></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/details' render={(props)=> <MoviesDetail {...props} movies={this.state.movies}/>}></Route>
        </Switch>
      </div>
     );
  }
}
 
export default App;
