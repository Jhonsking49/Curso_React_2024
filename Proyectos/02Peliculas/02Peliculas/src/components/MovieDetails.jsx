import useDataApi from '../hooks/useDataApi';
import Spinner from './Spinner';

const apikey = import.meta.env.VITE_API_KEY;
const MovieDetails = ({movieId}) => {
    const endPointSearch = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=es-es`;
    const {data, loading, error} = useDataApi(endPointSearch);
    const generos = data?.genres.map(genre=>genre.name);
    const generosJOIN = generos?.join(", ");
    return (
        <div className='bg-gray-800 p-4'>
        {loading && <Spinner />}
        {error && <p className='text-3xl font-bold uppercase'> Error {error}</p>}
        {data && (
            <>
                <div className='flex felx-col w-3/6 items-centere mx-auto'>
                    <img src={`${imgUrl}${data.poster_path}`} alt={data.title}
                    className='mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black
                    transition-all duration-500 ease-in-out' />
                </div>
                <div className='flex felx-col w-3/6 items-centere mx-auto'>
                    <img src={`${imgUrl}${data.backdrop_path}`} alt={data.title}
                    className='mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black
                    transition-all duration-500 ease-in-out' />
                </div>
                <div className='bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-2xl 
                hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out'>
                    <div className='md:flex'>
                        <div className='uppercase tracking-wide text-2xl text-indigo-500 font-semibold'>
                            {data.title}
                        </div>
                        <p className='block mt-5 text-lg leading-tight font-medium text-white'>
                            {data.tagline}
                        </p>
                        <p className='block mt-5 text-lg leading-tight font-medium text-white'>
                            {data.release_date}
                        </p>
                        <p className='block mt-5 text-lg leading-tight font-medium text-white'>
                            {data.release_date}
                        </p>
                    </div>
                </div>
            </>
        )}
            MovieDetails el id de la peli es: {movieId}
        </div>
    )
}

export default MovieDetails