import React from 'react';
import axios from 'axios';

class Movies extends React.Component {
    state = { 
        movies: []
     };
    getMovies = () =>{
        axios
        .get('https://yts.lt/api/v2/list_movies.json')
        .then(movies => this.setState({movies: movies.data.data.movies}))
        .catch(err => console.log(err));
    }
    componentDidMount(){
        this.getMovies();
    }
    render() { 
        // console.log(this.props.name)
        return ( 
            <React.Fragment>
                <div className='container'>
                    <div className="row">
                        {this.state.movies.map((movies)=>{
                            return (
                                <div className="col-md-3" onClick={()=> this.props.moviesData(movies)}>
                                    <img src={movies.medium_cover_image} alt="" key={movies.id}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Movies;