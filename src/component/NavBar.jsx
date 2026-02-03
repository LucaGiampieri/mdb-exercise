import { useTMDBContext } from "../context/TMDBContext"

import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {

    const { endpointFilm, endpointTv, endpointPerson, setMovieList, setTvList, setPersonList } = useTMDBContext();

    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        if (!inputValue.trim()) return;

        axios.get(`${endpointFilm}${inputValue}`, {
            params: {
                language: "it-IT"
            }
        })
            .then(res => setMovieList(res.data.results))
            .catch(err => console.error("Errore API film:", err));

        axios.get(`${endpointTv}${inputValue}`, {
            params: {
                language: "it-IT"
            }
        })
            .then(res => setTvList(
                res.data.results.map(tv => ({
                    ...tv,
                    title: tv.name,
                    original_title: tv.original_name
                }))
            ))
            .catch(err => console.error("Errore API TV:", err));

        // axios.get(`${endpointPerson}${inputValue}`, {
        //     params: {
        //         language: "it-IT"
        //     }
        // })
        //     .then(res => {
        //         const idRegista = res.data.results[0]?.id;
        //         if (!idRegista) return;

        //         return axios.get(`https://api.themoviedb.org/3/person/${idRegista}/movie_credits?api_key=${import.meta.env.VITE_API_KEY}`, {
        //             params: {
        //                 language: "it-IT"
        //             }
        //         });
        //     })
        //     .then(res => {
        //         if (!res) return;
        //         const directedMovies = res.data.crew.filter(film => film.job === "Director");
        //         setPersonList(directedMovies);
        //     })
        //     .catch(err => console.error("Errore API regista:", err));

    }, [inputValue]);














    return (
        <nav className="navbar">
            <h1 className="nav-title">The Movie Database</h1>
            <input
                className="nav-input"
                type="text"
                name="title"
                placeholder="Cosa stai cercando?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />


        </nav>
    )
}


export default NavBar
