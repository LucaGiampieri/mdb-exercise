
import { useTMDBContext } from "../context/TMDBContext"

function HomePage() {

    const { movieList } = useTMDBContext();

    return (
        <ul>
            {movieList.map(movie => {
                return (
                    <li key={movie.id}>
                        titolo = {movie.title} <br />
                        titolo originale = {movie.original_title} <br />
                        lingua = {movie.original_language} <br />
                        voto = {movie.vote_average}
                    </li>
                );
            })}
        </ul>
    )
}

export default HomePage
