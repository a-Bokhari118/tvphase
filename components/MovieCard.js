import Image from 'next/image';

const MovieCard = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="flex m-5 relative group  rounded-lg  shadow-xl cursor-pointer   hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 trasition duration-300  overflow-ellipsis">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
      <span className="absolute bottom-0 left-0 font-bold text-sm text-white group-hover:bg-gray-900 p-2 m-1 rounded-xl transition duration-300  ">
        {result.title || result.original_name}
      </span>
    </div>
  );
};

export default MovieCard;
