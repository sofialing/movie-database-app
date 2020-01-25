import React, { Component } from 'react'
import axios from 'axios';

export default class ShowCard extends Component {
    state = {
        title: '',
        overview: '',
        rating: '',
        episodes: '',
        seasons: '',
        runtime: '',
        status: '',
        type: '',
        genres: [],
        poster: '',
        backdrop: '',
    };

    componentDidMount() {
        const api_key = '7119aa69d9ede648d34b48fb09f84d2e'
        axios.get(`https://api.themoviedb.org/3/tv/${this.props.id}?api_key=${api_key}&language=en-US`)
            .then(({ data: show }) => {
                console.log(show);
                this.setState({
                    title: show.name,
                    overview: show.overview,
                    rating: show.vote_average,
                    episodes: show.number_of_episodes,
                    seasons: show.number_of_seasons,
                    runtime: show.episode_run_time[0],
                    status: show.status,
                    type: show.type,
                    genres: show.genres.map(genre => genre.name),
                    poster: `https://image.tmdb.org/t/p/w500/${show.poster_path}`,
                    backdrop: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
                });
            });
    }
    render() {
        return (
            <section className="movie-backdrop" style={{ backgroundImage: `url(${this.state.backdrop})` }}>
                <div className="container movie-info">
                    <div className="movie-poster">
                        <img src={this.state.poster} alt="" className="img-fluid" />
                    </div>
                    <div className="movie-details">
                        <div>
                            <h1 className="display-4 text-uppercase font-weight-bolder mb-2">
                                {this.state.title}
                            </h1>
                            <p className="lead">{this.state.overview}</p>
                        </div>
                        <ul>
                            <li>
                                <h3>Genres</h3>
                                <span>{this.state.genres.join(', ')}</span>
                            </li>
                            <li>
                                <h3>Rating</h3>
                                <span>{this.state.rating}/10</span>
                            </li>
                            <li>
                                <h3>Type</h3>
                                <span>{this.state.type}</span>
                            </li>
                            <li>
                                <h3>Status</h3>
                                <span>{this.state.status}</span>
                            </li>
                            <li>
                                <h3>Runtime</h3>
                                <span>{this.state.runtime} min</span>
                            </li>
                            <li>
                                <h3>Number of episodes</h3>
                                <span>{this.state.episodes}</span>
                            </li>
                            <li>
                                <h3>Number of seasons</h3>
                                <span>{this.state.seasons}</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
