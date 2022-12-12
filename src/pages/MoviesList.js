import { useState, useEffect } from "react";
import Search from "../components/Search";
import AllMovies from "../components/AllMovies";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./MoviePage";

function MoviesList() {
    const [isLoading, setIsLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b').then((response) => {
            return response.json();
        }).then((data) => {
            setIsLoading(false);
            setAllMovies(data.results);
        });
    }, [])
    return (<dev>
        <Switch>
            <Route path='/' exact>
                <Search />
                {isLoading ? <p> Loading ...</p> : <AllMovies movies={allMovies} />}
            </Route>
            <Route path={'/:id'}>
                <MoviePage movies={allMovies} />
            </Route>
        </Switch>
    </dev>
    )
}
export default MoviesList;