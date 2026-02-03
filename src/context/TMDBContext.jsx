import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const TMDBContext = createContext();


function TMDBProvider({ children }) {

    const endpointFilm = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const endpointTv = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=it_IT&query=`;

    const endpointPerson = `https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_API_KEY}&query=`

    const [movieList, setMovieList] = useState([]);

    const [tvList, setTvList] = useState([]);

    const [personList, setPersonList] = useState([]);

    console.log(tvList);

    return (
        <TMDBContext.Provider
            value={{
                endpointFilm,
                endpointTv,
                endpointPerson,
                movieList,
                tvList,
                personList,
                setMovieList,
                setTvList,
                setPersonList
            }}>
            {children}
        </TMDBContext.Provider>
    );
}

function useTMDBContext() {
    return useContext(TMDBContext);
}

export { TMDBProvider, useTMDBContext };
