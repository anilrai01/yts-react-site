import React from 'react';
import Movies from './movies';

class Home extends React.Component {
    // state = {  }
    handleMovies = (data) =>{
        // console.log(data)
        this.props.history.push('/details');
        this.props.dMovies(data);
    };
    render() { 
        return ( 
            <div>
                <h1>Download YTS YIFY movies: HD smallest size</h1>
                <p>Welcome to the official YTS.LT website. Here you will be able to browse and download YIFY movies in excellent 720p, 1080p and 3D quality, all at the smallest file size. Only here: YTS Movies Torrents. </p>
                <Movies moviesData={this.handleMovies}/>
            </div>
         );
    }
}
 
export default Home;