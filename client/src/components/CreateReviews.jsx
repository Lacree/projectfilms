import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateReviews extends Component {
    state = {
        redirect: false,
        newReview: {
            stars: "",
            review: ""
        },
        createdReviewId: null
    }

    handelNewReview = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const newReview = { ...this.state.newReview };
        newReview[attributeName] = attributeValue;
        this.setState({ newReview })
    }


    addNewReview = (event) => {
        event.preventDefault()

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
                <form onSubmit={this.addNewReview}>
                    {this.state.redirect ? (<Redirect to={'/reviews'} />) : null}

                    <div>
                        <input
                            name='stars'
                            type='text'
                            placeholder='Star rating'
                            value={this.state.newReview.stars}
                            onChange={this.handelNewReview}
                        />
                    </div>
                    <div>
                        <input
                            name='review'
                            type='text'
                            placeholder='Review'
                            value={this.state.newReview.review}
                            onChange={this.handelNewReview}
                        />
                    </div>
                    <div>
                        <input
                            type='submit'
                            value='Create New Review'
                        />
                    </div>
                </form>
            </div>
        )
    }
}