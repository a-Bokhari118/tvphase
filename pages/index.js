import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieCollection from '@/components/MovieCollection';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <MovieCollection />
        <MovieCollection />
        <MovieCollection />
        <MovieCollection />
      </div>
    </>
  );
}
