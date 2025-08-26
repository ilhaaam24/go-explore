import DestinationCard from "../components/DestinationCard";

const Destinations = [
  {
    id: 1,
    name: "Rome, Italy",
    price: "5,42k",

    day: "10 ",
    image: "./assets/images/rome.png",
  },
  {
    id: 2,
    name: "London, UK",
    price: "4,20k",
    day: "12 ",
    image: "./assets/images/london.jpg",
  },
  {
    id: 3,
    name: "Paris, France",
    price: "4,20k",
    day: "6 ",
    image: "./assets/images/europe.png",
  },
];

export default function Destination() {
  return (
    <div className="lg:min-h-screen pb-30  md:py-20  flex flex-col justify-center items-center relative px-4  md:px-8 lg:px-40 ">
      <img src="./assets/images/Decore.png" alt="decore" className="absolute hidden md:block md:h-[180px] md:w-[70px] lg:h-[252px] lg:w-[96px] b md:bottom-32  md:-right-1 lg:bottom-28 lg:right-48 z-0" />
      <div className="text-center ">
        <p className="font-poppins font-semibold text-lg text-[#5E6282]">Top Selling</p>
        <h2 className="font-volkhov text-3xl md:text-4xl lg:text-[50px] font-bold text-[#181E4B]">Top Destinations</h2>
        <div className="mt-[60px] grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}
