import React, { Component } from 'react'
import axios from "axios"

export default class LocationsInformation extends Component {

    state = {
        location: {}
    }

    deleteLocation = () => {
        axios.delete('/api/location/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }



    componentDidMount = () => {
        axios.get('/api/location/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ location: response.data })
                console.log(this.state)
            })
    }


    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Location was deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Location Information</h1>
                    <h5>street: {this.state.location.street}</h5>
                    <h5>city: {this.state.location.city}</h5>

                    <button onClick={this.deleteLocation}> Deleted </button>
                </div>
            )
        }
    }
}