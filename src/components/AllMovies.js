import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../store/search-context";
import MovieItem from "./MovieItem";

function AllMovies(props) {
    const searchCtx = useContext(SearchContext);
    const filterdMovies = props.movies.filter(movie => movie.title.toLowerCase().includes(searchCtx.searchTextValue.toLowerCase()))
    return (
        <dev>
            {
                filterdMovies.map(movie => <Link to={'/' + movie.id}><MovieItem movie={movie} key={movie.id} /></Link>)
            }
        </dev>
    );
}
export default AllMovies;