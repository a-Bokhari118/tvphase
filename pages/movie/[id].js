import axios from 'axios';
import Image from 'next/image';
const MoviePage = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  console.log(result);

  const allPro = [];
  const alldir = [];
  const allWrt = [];
  for (let i = 0; i < result.credits.crew.length; i++) {
    if (
      result.credits.crew[i].department === 'Production' &&
      result.credits.crew[i].job === 'Producer'
    ) {
      allPro.push(result.credits.crew[i]);
    }
  }

  const pros = allPro.length >= 3 ? allPro.slice(0, 3) : allPro;

  for (let i = 0; i < result.credits.crew.length; i++) {
    if (
      result.credits.crew[i].department === 'Directing' &&
      result.credits.crew[i].job === 'Director'
    ) {
      alldir.push(result.credits.crew[i]);
    }
  }
  const dirs = alldir.length >= 3 ? alldir.slice(0, 3) : alldir;

  for (let i = 0; i < result.credits.crew.length; i++) {
    if (
      result.credits.crew[i].department === 'Writing' &&
      result.credits.crew[i].job === 'Story'
    ) {
      allWrt.push(result.credits.crew[i]);
    }
  }
  const wrts = allWrt.length >= 3 ? allWrt.slice(0, 3) : allWrt;
  console.log(allWrt);
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

      <div className="absolute  top-5 left-5 flex container mx-auto justify-center items-start  h-[70vh] w-full py-16 z-50 text-white px-12">
        <div className="relative h-[100%] w-[30%] flex-[0.3] ">
          <Image
            className="rounded-lg"
            src={
              `${BASE_URL}${result.poster_path}` ||
              result.backdrop_path ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-[0.7] ml-10 ">
          <div className="flex items-center mt-10">
            <h1 className="font-bold text-4xl  ">
              {result.title || result.original_name}
            </h1>
            <span className="font-semibold text-2xl ml-2 text-gray-500">
              &#40; {result?.release_date} &#41;
            </span>
          </div>

          <div className="flex items-center mt-4">
            {result.genres.map((item) => (
              <p
                key={item.id}
                className="text-xl bg-gray-800/50 py-2 px-3 text-white rounded shadow mr-3"
              >
                {item.name}
              </p>
            ))}
            <p className="text-base text-gray-200">
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m
            </p>
          </div>

          <div className="text-xl font-semibold text-gray-100 mt-10 capitalize">
            {result.overview}
          </div>

          <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-8">
            {dirs.map((dir) => (
              <div key={dir.id}>
                <h3 className="font-bold">{dir.name}</h3>
                <p>{dir.job}</p>
              </div>
            ))}
            {wrts.map((wrt) => (
              <div key={wrt.id}>
                <h3 className="font-bold">{wrt.name}</h3>
                <p>{wrt.job}</p>
              </div>
            ))}
            {pros.map((pro) => (
              <div key={pro.id}>
                <h3 className="font-bold">{pro.name}</h3>
                <p>{pro.job}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`
  );

  return {
    props: {
      result: data,
    },
  };
}
