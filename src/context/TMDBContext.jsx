import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TMDBContext = createContext();


function TMDBProvider({ children }) {

    const endpointFilm = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const endpointTv = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const [movieList, setMovieList] = useState([]);

    const [tvList, setTvList] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const [latestMovies, setLatestMovies] = useState([]);

    const [latestTv, setLatestTv] = useState([]);

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

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`, {
            params: { language: "it-IT" }
        })
            .then(res =>
                setLatestMovies(
                    res.data.results.map(movie => ({
                        ...movie,
                        media_type: "movie"
                    }))
                )
            )
            .catch(err => console.error("Errore ultime uscite film:", err));


        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${import.meta.env.VITE_API_KEY}`, {
            params: { language: "it-IT" }
        })
            .then(res =>
                setLatestTv(
                    res.data.results.map(tv => ({
                        ...tv,
                        title: tv.name,
                        original_title: tv.original_name,
                        media_type: "tv"
                    }))
                )
            )
            .catch(err => console.error("Errore ultime uscite serie:", err));

    }, []);



    return (
        <TMDBContext.Provider
            value={{
                endpointFilm,
                endpointTv,
                movieList,
                tvList,
                inputValue,
                flags,
                defaultFlag,
                latestMovies,
                latestTv,
                setMovieList,
                setTvList,
                setInputValue,
                setLatestMovies,
                setLatestTv
            }}>
            {children}
        </TMDBContext.Provider>
    );
}

function useTMDBContext() {
    return useContext(TMDBContext);
}

export { TMDBProvider, useTMDBContext };
