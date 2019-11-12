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
        const attributeValue = event.target.value;
        const newLocation = { ...this.state.newLocation };
        newLocation[attributeName] = attributeValue;
        this.setState({ newLocation })
    }


    addNewLocation = (event) => {
        event.preventDefault();

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

                    {this.state.redirect ? (<Redirect to={`/locations`} />) : null}

                    <div>
                        <input
                            name='street'
                            type='text'
                            placeholder='StreetName'
                            value={this.state.newLocation.street}
                            onChange={this.handleNewLocation}
                        />
                    </div>
                    <div>
                        <input
                            name='city'
                            type='text'
                            placeholder='City'
                            value={this.state.newLocation.city}
                            onChange={this.handleNewLocation}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create New Location"
                        />
                    </div>
                </form>

            </div>
        )
    }
}
