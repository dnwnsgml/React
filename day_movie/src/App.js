import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Movie from './movies';

class App extends Component {

  //초기값 선언
  state = {
    isLoading: true,
    movies: [],
  }

  // api연결함수
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(' https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies.data.data.movies);
    console.log(movies)
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className='container'>
        <div className='movies'>
          {isLoading ? '로딩' : movies.map((movie) => (
            <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
