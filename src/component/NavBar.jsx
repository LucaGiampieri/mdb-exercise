import { useTMDBContext } from "../context/TMDBContext"

import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {

    const { endpointFilm, endpointTv, setMovieList, setTvList } = useTMDBContext();

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (!inputValue.trim()) return;

        axios.get(`${endpointFilm}${inputValue}`)
            .then(res => setMovieList(res.data.results))
            .catch(err => console.error("Errore API:", err));

    }, [inputValue]);

    useEffect(() => {
        if (!inputValue.trim()) return;

        axios.get(`${endpointTv}${inputValue}`)
            .then(res => setTvList(res.data.results.map(tv => {
                return { ...tv, title: tv.name, original_title: tv.original_name }

            })))
            .catch(err => console.error("Errore API:", err));

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
