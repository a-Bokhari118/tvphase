import Image from 'next/image';
const Hero = () => {
  return (
    <div className="relative min-h-[calc(70vh-80px)] w-full bg-gradient-to-t from-black to-gray-200 flex justify-center items-center overflow-hidden z-40">
      <Image
        src="https://see.news/wp-content/uploads/2021/09/venom-let-there-be-carnage-4-e1632166619370.jpg"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
    </div>
  );
};

export default Hero;
