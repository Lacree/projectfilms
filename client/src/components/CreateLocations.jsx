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
    handleNewLocation = (evt) => {
        const attributeName = evt.target.name;
        const attributeValue = evt.target.attributeValue;

        const newLocation = { ...this.state.newLocation };
        newLocation[attributeName] = attributeValue;

        this.setState({ newLocation })
    }

    addNewLocation = (evt) => {
        evt.preventDefualt();

        axios.post('/api/location', this.state.newLocation)
            .then((createLocation) => {
                const newState = { ...this.state }
                newState.createdLocationId = createLocation._id
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
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='newCityName'
                            required='required'
                            value={this.state.newLocation.city}
                        />
                        <div>
                            <input
                                type='Submit'
                                value='Create Location'
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
