export default function Service() {
  return (
    <div className="lg:min-h-screen relative px-4  md:px-8 lg:px-40  ">
      {/* element */}
      <img src="./assets/images/pattern.png" alt="" className=" h-[100px] md:h-[140px] lg:h-[166px] absolute top-24 right-10 md:top-44  md:right-16 lg:top-20  lg:right-16" />
      <div className="flex flex-col justify-center items-center  min-h-screen ">
        <p className="font-poppins font-medium md:text-base lg:text-lg text-[#5E6282]">CATEGORY</p>
        <h2 className="mt-2.5 font-volkhov text-3xl md:text-4xl lg:text-[50px] font-bold text-[#181E4B]  text-center">We Offer Best Services</h2>
        <div className="mt-16  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 md:gap-14 lg:gap-8 ">
          {/* service 1 */}
          <div className="text-center flex flex-col items-center p-10">
            <img src="./assets/images/calculated_weather.png" alt="service" className="h-[78px] " />
            <h3 className="text-xl font-semibold mt-7 font-open-sans">Calculated Weather</h3>
            <p className="max-w-[160px] mt-3.5 font-medium font-poppins text-[#5E6282] leading-6">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          {/* service 2 */}
          <div className="relative">
            <div className="h-20 w-20 rounded-br-[10px] rounded-tl-[30px] bg-[#DF6951] absolute bottom-0 -left-10 z-10"></div>
            <div className="text-center flex flex-col items-center rounded-4xl shadow-lg  p-10 z-20 relative bg-white ">
              <div className=" h-[78px]  flex items-center justify-center">
                <img src="./assets/images/best_flights.png" alt="service" className="h-[78px] " />
              </div>
              <h3 className="text-xl font-semibold mt-7 font-open-sans">Best Flights</h3>
              <p className="max-w-[160px] mt-3.5 font-medium font-poppins text-[#5E6282] leading-6">Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
          </div>
          {/* service 3 */}
          <div className="text-center flex flex-col items-center p-10">
            <img src="./assets/images/local_events.png" alt="service" className="h-[78px]" />
            <h3 className="text-xl font-semibold mt-7 font-open-sans">Local Events</h3>
            <p className="max-w-[160px] mt-3.5 font-medium font-poppins text-[#5E6282] leading-6">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
          </div>
          {/* service 4 */}
          <div className="text-center flex flex-col items-center p-10">
            <img src="./assets/images/customization.png" alt="service" className="h-[78px]" />
            <h3 className="text-xl font-semibold mt-7 font-open-sans">Customization</h3>
            <p className="max-w-[160px] mt-3.5 font-medium font-poppins text-[#5E6282] leading-6">We deliver outsourced aviation services for military customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
