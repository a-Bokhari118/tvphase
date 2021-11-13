import Slider from 'react-slick';
import MovieCard from './MovieCard';

const data = [
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
  {
    adult: false,
    backdrop_path: '/efuPybo8V8KTYGslQphO74LRvm0.jpg',
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: 'en',
    original_title: 'Venom: Let There Be Carnage',
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
    popularity: 4497.836,
    poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    release_date: '2021-09-30',
    title: 'Venom: Let There Be Carnage',
    video: false,
    vote_average: 6.8,
    vote_count: 1823,
  },
];

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

const MovieCollection = () => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8  mx-auto ">
      <h2 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl">
        Movies
      </h2>

      <Slider {...settings}>
        {data.map((result, index) => (
          <MovieCard key={index} result={result} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieCollection;
