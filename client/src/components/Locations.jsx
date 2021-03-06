import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Locations extends Component {
    state = {
        locations: []
    }


    componentDidMount = () => {
        axios.get('/api/location')
            .then((response) => {
                this.setState({ locations: response.data })
            })
    }


    render() {
        console.log(this.state.locations)
        return (
            <div>
                <h1>Locations</h1>
                {this.state.locations.map((location) => {
                    return (
                        <div key={location._id}>
                            <Link to={`/locations/${location._id}`}><h5>{location.city}</h5></Link>

                        </div>
                    )
                })}
                <Link to='/'>Back</Link>
            </div>
        )
    }
}
