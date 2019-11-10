import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link to="/movies"> Movies</Link>
                </button>

            </div>
        )
    }
}
