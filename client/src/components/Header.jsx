import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'



export default class Header extends Component {
    
    render() {
        return (
            <div>
                <button>
                    <Link to="/movies"> Movies</Link>
                </button>
                
                <button>
                    <Link to="/locations"> Locations</Link>
                </button>

                <button>
                    <Link to="/reviews"> Reviews</Link>
                </button>

                <button>
                    <Link to="/movie/new"> Create New Movie</Link>
                </button>

                <button>
                    <Link to="/location/new"> Create New Location</Link>
                </button>

                <button>
                    <Link to="/review/new"> Create New Review</Link>
                </button>
                <div>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=unzT4BSwN-s"
         />
            </div>
            </div>

            
        )
    }
}
