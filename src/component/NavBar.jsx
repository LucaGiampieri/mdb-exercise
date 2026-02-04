import { useTMDBContext } from "../context/TMDBContext"

import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {

    const { endpointFilm, endpointTv, setMovieList, setTvList, inputValue, setInputValue } = useTMDBContext();

    useEffect(() => {
        if (!inputValue.trim()) return;

        axios.get(`${endpointFilm}${inputValue}`, {
            params: {
                language: "it-IT"
            }
        })
            .then(res =>
                setMovieList(
                    res.data.results.map(movie => ({
                        ...movie,
                        media_type: "movie"
                    }))
                )
            )
            .catch(err => console.error("Errore API film:", err));


        axios.get(`${endpointTv}${inputValue}`, {
            params: {
                language: "it-IT"
            }
        })
            .then(res =>
                setTvList(
                    res.data.results.map(tv => ({
                        ...tv,
                        title: tv.name,
                        original_title: tv.original_name,
                        media_type: "tv"
                    }))
                )
            )
            .catch(err => console.error("Errore API TV:", err));

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
