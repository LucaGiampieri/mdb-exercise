import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const TMDBContext = createContext();


function TMDBProvider({ children }) {

    const endpointFilm = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const endpointTv = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const [movieList, setMovieList] = useState([]);

    const [tvList, setTvList] = useState([]);

    console.log(tvList);

    return (
        <TMDBContext.Provider
            value={{
                endpointFilm,
                endpointTv,
                movieList,
                tvList,
                setMovieList,
                setTvList
            }}>
            {children}
        </TMDBContext.Provider>
    );
}

function useTMDBContext() {
    return useContext(TMDBContext);
}

export { TMDBProvider, useTMDBContext };
