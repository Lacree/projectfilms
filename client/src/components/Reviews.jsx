import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Reviews extends Component {
    state = {
        reviews: []
    }
    componentDidMount = () => {
        axios.get('/api/review')
            .then((response) =>{
                this.setState({reviews: response.data})
            })

    }
    render() {
        return (
            <div>
                <h1>Reviews</h1>
                {this.state.reviews.map((review) => {
                    return(
                        <div key={review._id}>
                            <Link to={'/reviews/' + review._id}><h2>{review.stars}</h2></Link>
                            </div>
                    )
                   
                })}
                <Link to='/'>Back</Link>
            </div>
        )
    }
}
