import React from 'react';

class MoviesDetail extends React.Component {
    // state = {  }
    render() { 
        // console.log(this.props.movies)
        return ( 
            <div>
                <img src={this.props.movies.medium_cover_image} alt="" ></img>
            </div>
         );
    }
}
 
export default MoviesDetail;