export default function DestinationCard({ destination }) {
  return (
    <div className="rounded-3xl md:w-[250x] md:h-[320px] lg:w-[315px] lg:h-[457px]  relative overflow-hidden shadow-2xl/10 cursor-pointer">
      <img src={destination.image} alt={destination.name} className="w-full h-full object-cover rounded-3xl" loading="lazy" />
      <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-7">
        <div className="flex justify-between">
          <p className="font-poppins font-medium text-lg md:text-base lg:text-lg text-[#5E6282]">{destination.name}</p>
          <p className="font-poppins font-medium text-lg md:text-base lg:text-lg  text-[#5E6282]">${destination.price}</p>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <img src="./assets/icons/Navigation.png" alt="" className="size-4" />
          <p className="font-poppins font-medium text-lg md:text-base lg:text-lg  text-[#5E6282]">{destination.day} Days Trip</p>
        </div>
      </div>
    </div>
  );
}
