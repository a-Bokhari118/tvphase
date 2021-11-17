import axios from 'axios';
import Image from 'next/image';
import { PlayIcon, DocumentAddIcon } from '@heroicons/react/solid';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
const MoviePage = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  console.log(result);
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <>
      <section className="relative ">
        <div className="bg-black/90 z-10 absolute  md:min-h-[70vh]  min-h-screen inset-0"></div>
        <div className="relative min-h-screen  md:min-h-[70vh]  lg:min-h-[80vh]">
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute top-1 left-0  lg:top-5 lg:left-5 lg:flex md:container lg:mx-auto justify-center items-start min-h-full lg:h-[70vh] w-full py-5 lg:py-16 z-50 text-white px-5 lg:px-12">
          <div className="relative h-full w-full flex-[0.3] hidden md:block">
            <Image
              className="rounded-lg relative"
              src={
                `${BASE_URL}${result.poster_path}` ||
                result.backdrop_path ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute -top-4 -right-4 bg-red-700 rounded-full flex items-center justify-center py-3 px-3 border  border-black">
              {result.vote_average}
            </span>
          </div>
          <div className="flex-[0.7] md:ml-10 my-auto pb-2">
            <div className="md:flex md:items-center">
              <h1 className="font-bold text-3xl md:text-4xl ">
                {result.title || result.original_name}
              </h1>
              <span className="font-semibold text-sm md:text-2xl ml-2 text-gray-500">
                &#40; {result?.release_date} &#41;
              </span>
            </div>

            <div className="flex items-center mt-4">
              {result.genres.map((item) => (
                <p
                  key={item.id}
                  className="text-xs md:text-xl bg-gray-800/50 py-2 px-3 text-white rounded shadow mr-3"
                >
                  {item.name}
                </p>
              ))}
              <p className="text-base text-gray-200">
                {Math.floor(result.runtime / 60)}h {result.runtime % 60}m
              </p>
            </div>

            <div className="text-sm md:text-xl font-semibold text-gray-100 mt-10 capitalize">
              {result.overview}
            </div>

            <div className="mt-10 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
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
            <div className="flex mt-10 ">
              <button className="flex items-center  py-2 px-3 bg-gray-500/50 text-white border-none rounded-md hover:shadow-md hover:bg-gray-300 hover:text-gray-900 font-semibold capitalize">
                <PlayIcon className="w-5 h-5 pr-1" /> Play Trailer
              </button>
              <button className="flex  items-center py-2 px-3 bg-gray-500/50 text-white border-none rounded-md hover:shadow-md hover:bg-gray-300 hover:text-gray-900 font-semibold capitalize ml-5">
                <DocumentAddIcon className="w-5 h-5 pr-1" /> Add to watch list
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#616161] py-12 px-5">
        <div className="flex flex-col lg:flex-row">
          <div className="overflow-x-scroll overflow-y-scroll flex-[0.5] h-60">
            <h1 className="text-white text-3xl font-bold">More Videos</h1>
            <div className="flex flex-col lg:flex-row pt-5 ">
              {result?.videos.results.map((vid, index) => (
                <div
                  className="rounded lg:pr-5 pt-5 cursor-pointer h-72"
                  key={index}
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${vid?.key}`}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="ml-5 flex-[0.5]">
            <h1 className="text-white text-3xl font-bold">Movie Details</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits,videos`
  );

  return {
    props: {
      result: data,
    },
  };
}
