import React from "react";
// yarn add prop-types
import PropTypes from "prop-types";
import './movies.css';

function Movie({ id, year, title, summary, poster, }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div>
                <h1 className="movie__title">{title}</h1>
                <h3 className="movie__year">{year}</h3>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
}

export default Movie;