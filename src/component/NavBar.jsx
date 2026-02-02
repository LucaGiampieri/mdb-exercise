import { useTMDBContext } from "../context/TMDBContext"

import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {

    const { endpoint, setMovieList } = useTMDBContext();

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (!inputValue.trim()) return; // evita chiamate vuote

        // chiama l'API ogni volta che inputValue cambia
        axios.get(`${endpoint}${inputValue}`)
            .then(res => setMovieList(res.data.results))
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
