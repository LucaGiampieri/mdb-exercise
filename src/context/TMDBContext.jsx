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


    return (
        <TMDBContext.Provider
            value={{
                endpointFilm,
                endpointTv,
                endpointPerson,
                movieList,
                tvList,
                personList,
                flags,
                defaultFlag,
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
