import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function MoviePage(props) {
    const { id } = useParams();
    const movie = props.movies.find((movie) => {
        return id === movie.id.toString();
    });

    return <Card style={{
        backgroundImage: "url(https://image.tmdb.org/t/p/w500" + movie.backdrop_path + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100rem',
        height: '50rem',
        margin:'auto',
        color: '#fff',
    }}>
        <Card.Body>
            <Card.Title>title: {movie.title}</Card.Title>
            <Card.Text>overview: {movie.overview}</Card.Text>
            <Card.Text>vote average: {movie.vote_average}</Card.Text>
            <Card.Text>vote count :{movie.vote_count}</Card.Text>
        </Card.Body>
    </Card>
}

export default MoviePage;