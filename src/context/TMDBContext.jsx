import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TMDBContext = createContext();


function TMDBProvider({ children }) {

    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=ritorno+al+futuro`

    const [movieList, setMovieList] = useState([])

    function fetchMovies() {
        axios.get(endpoint)
            .then((res) => setMovieList(res.data.results))
            .catch(err => console.error("Errore nella richiesta"))
    }

    useEffect(fetchMovies, []);

    console.log(movieList)

    return (
        <TMDBContext.Provider value={{}}>
            {children}
        </TMDBContext.Provider>
    );
}

function useTMDBContext() {
    return useContext(TMDBContext);
}

export { TMDBProvider, useTMDBContext };
