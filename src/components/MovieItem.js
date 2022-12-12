import Card from 'react-bootstrap/Card';
function MovieItem(props) {
    return <Card style={{
        backgroundImage: "url(https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '18rem',
        height: '30rem',
        display:'inline-block',
    }}>
        <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
                {props.movie.release_date}
            </Card.Text>
        </Card.Body>
    </Card>
}
export default MovieItem;