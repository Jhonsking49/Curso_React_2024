import MovieDetails from "../components/MovieDetails";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    return (
        <div>
            <BackButton />
            <MovieDetails movieId={movieId} />
        </div>
    )
}

export default MovieDetailsPage