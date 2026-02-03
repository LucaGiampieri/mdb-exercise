import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useTMDBContext } from "../context/TMDBContext";


function FilmAndTvDetail() {

    const { movieList, tvList, endpointFilm, endpointTv } = useTMDBContext();

    const { id, type } = useParams();

    const [cardDetail, setCardDetail] = useState();

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
                    media_type: type
                };

                setCardDetail(normalizedData);
            })
            .catch(err => {
                navigate("/");
                console.log("errore sulla chiamata", err);
            });

    }, [id, type]);

    const flags = {
        en: "https://flagcdn.com/us.svg",
        it: "https://flagcdn.com/it.svg",
        fr: "https://flagcdn.com/fr.svg",
        es: "https://flagcdn.com/es.svg",
        de: "https://flagcdn.com/de.svg",
        ja: "https://flagcdn.com/jp.svg",
        zh: "https://flagcdn.com/cn.svg",
        ko: "https://flagcdn.com/kr.svg"
    };
    const defaultFlag = "https://flagcdn.com/un.svg";

    console.log(type, id);

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
                    </div>

                    <div className="card-text-detail">
                        <h2 className="card-movie-title-detial">{cardDetail.title} </h2>
                        <h3 className="card-movie-original-title-detail">titolo originale = {cardDetail.original_title} </h3>
                        <div className="card-lenguage-score-container-deatl">
                            <div className="card-lenguage-detail" >
                                <h4> lingua = </h4>
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
                        <p className="card-description-detail">
                            {cardDetail.overview}
                        </p>
                        <div className="card-button-container-detail">
                            <Link
                                to="/"
                                className="card-button-detail">
                                Torna alla home
                            </Link>
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