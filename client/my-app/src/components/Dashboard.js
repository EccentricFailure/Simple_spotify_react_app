import React, { Component } from 'react';
import './Dashboard.scss';
import SongBlock from './SongBlock';

export default class Dashboard extends Component {
    state = {
        value: '',
        songs: null,
        error: false,
        loading: false,
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({value: event.target.value});
    };

    handleSubmit = async event => {
        event.preventDefault();
        try {
            this.setState({loading: true});
            fetch(`http://localhost:9000/songs/${this.state.value}`)
            .then(res => res.json())
            .then((result) => this.setState({songs: result, loading: false, value: ''}));
        }catch (err) {
            this.setState({error: true, loading: false});
        }
    };

    render() {
        const {songs, error, loading} = this.state;
        let songInfo = null;

        if (songs) {
            if (songs.length === 0) {
                songInfo = (
                    <h3>No songs match your search, please try again</h3>
                );
            } else if (songs.length > 0) {
                songInfo = (
                    <>
                        <h2>Search results:</h2>
                        <SongBlock
                            loading={this.state.loading}
                            error={this.state.error}
                            songs={this.state.songs}
                        />
                    </>
                );
            } 
        }

        if (error) {
            songInfo = (
                <h3> Something went wrong </h3>
            );
        }

        if (loading) {
            songInfo = <h3>Searching for songs..</h3>;
        }

        return(
            <>
            <h1>Search for a song by name or artist</h1>
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="search-label">
                    Search here
                    <input
                        className="search-input"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="..."
                    />
                </label>
                <input type="submit" value="search"/>
            </form>
            {songInfo ? songInfo : null}
            </>
        );
    }
}