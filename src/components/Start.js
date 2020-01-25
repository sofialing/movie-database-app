import React, { Component } from 'react'
import axios from 'axios';
import HeroStart from './HeroStart';
import Feature from './Feature';

export default class Start extends Component {
    state = {
        latest_movies: [],
        top_movies: [],
        top_shows: [],
        test: []
    };

    componentDidMount() {
        const api_key = '7119aa69d9ede648d34b48fb09f84d2e';
        axios
            .get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
            )
            .then(res => {
                this.setState({ latest_movies: res.data.results });
            });
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
            )
            .then(res => {
                this.setState({ top_movies: res.data.results });
            });
        axios
            .get(
                `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
            )
            .then(res => {
                this.setState({ top_shows: res.data.results });
            });
    }
    render() {
        return (
            <div>
                <HeroStart />
                <Feature title="Now playing movies" data={this.state.latest_movies} type="movies" />
                <Feature title="Popular movies" data={this.state.top_movies} type="movies" />
                <Feature title="Popular tv shows" data={this.state.top_shows} type="shows" />
            </div>
        )
    }
}
