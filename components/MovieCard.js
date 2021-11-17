import Image from 'next/image';
import { useRouter } from 'next/router';
const MovieCard = ({ result }) => {
  const router = useRouter();
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="flex m-5 relative   rounded-lg  shadow-xl cursor-pointer   hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 trasition duration-300  overflow-ellipsis">
      <Image
        src={
          `${BASE_URL}${result.poster_path}` ||
          result.backdrop_path ||
          `${BASE_URL}${result.poster_path}`
        }
        width={230}
        height={310}
        objectFit="cover"
        className="rounded-lg"
        onClick={() => router.push(`/movie/${result.id}`)}
      />
    </div>
  );
};

export default MovieCard;
