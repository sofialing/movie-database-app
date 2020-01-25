import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FeaturedCast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        const api_key = '7119aa69d9ede648d34b48fb09f84d2e';
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=${api_key}&language=en-US`)
            .then(({ data: cast }) => {
                this.setState({ cast: cast.cast });
            });
    }

    render() {
        return (
            <section className="container my-5">
                <div className="row">
                    <div className="col d-flex justify-content-between align-content-center">
                        <h2 className="font-weight-bold text-uppercase h4 mb-3">Top billed cast</h2>
                        <Link to="/" className="text-uppercase">Show more</Link>
                    </div>
                </div>
                <div className="row">
                    {this.state.cast.length ?
                        (this.state.cast.slice(0, 6).map(cast => {
                            return (
                                <div className="col-2" key={cast.cast_id}>
                                    <img src={'https://image.tmdb.org/t/p/w500/' + cast.profile_path} alt={cast.name} className="img-fluid mb-2" />
                                    <h3 className="h6 font-weight-bold mb-0">{cast.name}</h3>
                                    <p className="small">{cast.character}</p>
                                </div>
                            )
                        })) :
                        (<p>Nothing to display</p>)}
                </div>
            </section>
        )
    }
}
