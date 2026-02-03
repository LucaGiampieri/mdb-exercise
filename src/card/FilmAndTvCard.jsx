import { Link } from "react-router-dom";
import { useTMDBContext } from "../context/TMDBContext";

function FilmAndTvCard({ movie }) {

    const { flags, defaultFlag } = useTMDBContext()

    return (
        <div
            className="card"
        >
            <div className="card-inner">
                <div className="card-front">
                    <img
                        className="card-background"
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="card-back">
                    <div className="card-back-content">
                        <h2 className="card-movie-title">{movie.title} </h2>
                        <h3 className="card-movie-original-title">Titolo originale = {movie.original_title} </h3>
                        <div className="card-lenguage-score-container">
                            <div className="card-lenguage" >
                                <h4> Lingua <br />originale </h4>
                                <img
                                    className="card-lenguage-flag"
                                    src={flags[movie.original_language] || defaultFlag}
                                    alt={movie.original_language}
                                />
                            </div>
                            <div className="card-score">
                                {Math.ceil(movie.vote_average / 2) === 0 && (
                                    <>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 1 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 2 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 3 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 4 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 5 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </>
                                )}
                            </div>
                        </div>
                        <p className="card-description">
                            {movie.overview}
                        </p>
                        <Link
                            to={`/${movie.media_type}/${movie.id}`}
                            className="card-button">
                            Maggiori informazioni
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FilmAndTvCard




