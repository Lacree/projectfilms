import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateReviews extends Component {
    state = {
        redirect: false,
        newReview: {
            stars: '',
            review: ''
        },
        createdReviewId: null
    }
    handleNewReview = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newReview = { ...this.state.newReview };
        newReview[attributeName] = attributeValue;

        this.setState({ newReview })
    }

    addNewReview = (event) => {
        event.preventDefualt();

        axios.post('/api/review', this.state.newReview)
            .then(createdReview => {
                const newState = { ...this.state }
                newState.createdReviewId = createdReview._id
                newState.redirect = true
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewReview} >
                    {this.state.redirect ? (<Redirect to={`/review${this.state.createdReviewId}`} />) : null}

                    <div>
                        <input
                            type='text'
                            name='newStarRating'
                            required='required'
                            value={this.state.newReview.stars}
                            onChange={this.handleNewReview}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='newReview'
                            required='required'
                            value={this.state.newReview.review}
                            onChange={this.handleNewReview}
                        />
                        <div>
                            <input
                                type='Submit'
                                value='Create New Review'
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}