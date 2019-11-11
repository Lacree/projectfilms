import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateLocations extends Component {
    state = {
        redirect: false,
        newLocation: {
            street: '',
            city: ''
        },
        createdLocationId: null
    }
    handleNewLocation = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.attributeValue;

        const newLocation = { ...this.state.newLocation };
        newLocation[attributeName] = attributeValue;

        this.setState({ newLocation })
    }

    addNewLocation = (event) => {
        event.preventDefualt();

        axios.post('/api/location', this.state.newLocation)
            .then(createdLocation => {
                const newState = { ...this.state }
                newState.createdLocationId = createdLocation._id
                newState.redirect = true
                this.setState(newState)
            })
    }






    render() {
        return (
            <div>
                <form onSubmit={this.addNewLocation} >
                    {this.state.redirect ? (<Redirect to={`/location${this.state.createdLocationId}`} />) : null}

                    <div>
                        <input
                            type='text'
                            name='newStreetName'
                            required='required'
                            value={this.state.newLocation.street}
                            onChange={this.handleNewLocation}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='newCityName'
                            required='required'
                            value={this.state.newLocation.city}
                            onChange={this.handleNewLocation}
                        />
                        <div>
                            <input
                                type='Submit'
                                value='Create New Location'
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
