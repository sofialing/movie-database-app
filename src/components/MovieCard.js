import React, { Component } from 'react'
import axios from 'axios';

export default class MovieCard extends Component {
    state = {
        title: '',
        overview: '',
        rating: '',
        runtime: '',
        language: '',
        status: '',
        release_date: '',
        budget: '',
        genres: [],
        poster: '',
        backdrop: '',
    };

    componentDidMount() {
        const api_key = '7119aa69d9ede648d34b48fb09f84d2e'
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${api_key}&language=en-US`)
            .then(({ data: movie }) => {
                this.setState({
                    title: movie.title,
                    overview: movie.overview,
                    rating: movie.vote_average,
                    runtime: Math.floor(movie.runtime / 60) + ' hours ' + movie.runtime % 60 + ' min ',
                    language: movie.spoken_languages.map(language => language.name).join(', '),
                    status: movie.status,
                    release_date: movie.release_date,
                    budget: movie.budget.toLocaleString(),
                    genres: movie.genres.map(genre => genre.name),
                    poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                    backdrop: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
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
                                <h3>Runtime</h3>
                                <span>{this.state.runtime}</span>
                            </li>
                            <li>
                                <h3>Language</h3>
                                <span>{this.state.language}</span>
                            </li>
                            <li>
                                <h3>Status</h3>
                                <span>{this.state.status}</span>
                            </li>
                            <li>
                                <h3>Release date</h3>
                                <span>{this.state.release_date}</span>
                            </li>
                            <li>
                                <h3>Budget</h3>
                                <span>${this.state.budget}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
