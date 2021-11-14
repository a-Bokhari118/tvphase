import axios from 'axios';
import Image from 'next/image';
const MoviePage = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <section className="">
      <div className="bg-black/90 z-10 absolute h-[70vh] inset-0"></div>
      <div className="relative min-h-[70vh]">
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-5 left-5 flex container mx-auto justify-center items-center min-h-[70vh] w-full py-16 z-50">
        <div className="h-full w-[80%] flex-[0.3]">
          <Image
            src={
              `${BASE_URL}${result.poster_path}` ||
              result.backdrop_path ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-[0.7]">adasasdas</div>
      </div>
    </section>
  );
};

export default MoviePage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      result: data,
    },
  };
}
