import React, { Component } from 'react';

class Movie extends Component {
    state = {
        name: '',
        genre: '',
        releaseYear: '',
    }
    render() {
        return (<div>
            <p>{this.state.name}</p>
            <p>{this.state.genre}</p>
            <p>{this.state.releaseYear}</p>
        </div>)
    }

}

