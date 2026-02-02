
import { useTMDBContext } from "../context/TMDBContext"

function HomePage() {

    const { movieList, tvList } = useTMDBContext();

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
        <main>
            <h2>Film</h2>
            <ul>
                {movieList.map(movie => {
                    return (
                        <li key={movie.id}>
                            titolo = {movie.title} <br />
                            titolo originale = {movie.original_title} <br />
                            lingua =
                            <img
                                src={flags[movie.original_language] || defaultFlag}
                                alt={movie.original_language}
                            /> <br />
                        </li>
                    );
                })}
            </ul>
            <h2>Tv</h2>
            <ul>
                {tvList.map(tv => {
                    return (
                        <li key={tv.id}>
                            titolo = {tv.name} <br />
                            titolo originale = {tv.original_name} <br />
                            lingua =
                            <img
                                src={flags[tv.original_language] || defaultFlag}
                                alt={tv.original_language}
                            /> <br />
                            voto = {tv.vote_average} <br />
                        </li>
                    );
                })}
            </ul>
        </main>
    )
}

export default HomePage
