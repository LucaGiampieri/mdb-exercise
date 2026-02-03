import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useTMDBContext } from "../context/TMDBContext";

function FilmAndTvDetail() {

    const { flags, defaultFlag } = useTMDBContext()

    const { id, type } = useParams();

    const [cardDetail, setCardDetail] = useState();

    const [actors, setActors] = useState();

    const [director, setDirector] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=it-IT`)
            .then(resp => {

                const data = resp.data;

                const normalizedData = {
                    ...data,
                    title: type === "tv" ? data.name : data.title,
                    original_title: type === "tv" ? data.original_name : data.original_title,
                    release_date: type === "tv" ? data.first_air_date : data.release_date,
                    media_type: type,
                    genres: data.genres?.map(g => g.name) || [],
                    year: (type === "tv" ? data.first_air_date : data.release_date)?.slice(0, 4),
                };

                setCardDetail(normalizedData);
            })
            .catch(err => {
                navigate("/");
                console.log("errore sulla chiamata", err);
            });

        axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=it-IT`)
            .then(resp => {
                setActors(resp.data.cast.slice(0, 5));

                const director = resp.data.crew.find(p => p.job === "Director");
                setDirector(director);
            });

    }, [id, type]);

    return (

        <>
            {cardDetail ? (
                <div
                    className="card-detail"
                >

                    <div className="card-img-detail">
                        <img
                            className="card-background-detail"
                            src={`https://image.tmdb.org/t/p/w342${cardDetail.poster_path}`} alt={cardDetail.title} />
                        <div className="card-button-container-detail">
                            <Link
                                to="/"
                                className="card-button-detail">
                                Torna alla home
                            </Link>
                        </div>
                    </div>

                    <div className="card-text-detail">
                        <h2 className="card-movie-title-detial">{cardDetail.title} </h2>
                        <h3 className="card-movie-original-title-detail">Titolo originale = {cardDetail.original_title} <br /> Anno di uscita: {cardDetail.year}</h3>
                        <div className="card-lenguage-score-container-deatl">
                            <div className="card-lenguage-detail" >
                                <h4> Lingua originale = </h4>
                                <img
                                    className="card-lenguage-flag-detail"
                                    src={flags[cardDetail.original_language] || defaultFlag}
                                    alt={cardDetail.original_language}
                                />
                            </div>
                            <div className="card-score-detail">
                                {Math.ceil(cardDetail.vote_average / 2) === 0 && (
                                    <>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(cardDetail.vote_average / 2) === 1 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(cardDetail.vote_average / 2) === 2 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(cardDetail.vote_average / 2) === 3 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(cardDetail.vote_average / 2) === 4 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(cardDetail.vote_average / 2) === 5 && (
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
                        <h4 className="card-genre-detail">
                            Genere: {cardDetail?.genres?.join(", ")}
                        </h4>
                        <p className="card-description-detail">
                            {cardDetail.overview}
                        </p>
                        <h5 className="card-director-detail">Regista: {director?.name}</h5>
                        <div className="card-actors-container-detail">
                            <p>
                                Attori: {actors?.map(actor => actor.name).join(", ")}
                            </p>
                        </div>
                    </div>

                </div>

            ) : (
                <p className="loader">Loading...</p>
            )
            }
        </>
    )
}

export default FilmAndTvDetail