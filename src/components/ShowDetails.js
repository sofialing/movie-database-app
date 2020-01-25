import React, { Component } from 'react'
import ShowCard from './ShowCard';
import FeaturedCast from './FeaturedCast';

export default class ShowDetails extends Component {

    render() {
        return (
            <div>
                <ShowCard id={this.props.match.params.showId} />
                <FeaturedCast id={this.props.match.params.showId} type="tv" />
            </div>
        )
    }
}
