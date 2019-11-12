import React, { Component } from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

export default class ReviewsInformation extends Component {

    state = {
        review: {}
    }

    deleteReview = () => {
        axios.delete('/api/review/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }



    componentDidMount = () => {
        axios.get('/api/review/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ review: response.data })
                console.log(this.state)
            })
    }


    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Review was deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Review Information</h1>
                    <h5>star: {this.state.review.star}</h5>
                    <h5>review: {this.state.review.review}</h5>

                    <button onClick={this.deleteReview}> Delete </button>
                    <button>
                    <Link to='/'>Back</Link>
                    </button>
                </div>
            )
        }
    }
}