import React, { useEffect } from "react";
import { useState } from "react";
import { FaStreetView } from "react-icons/fa";

function Temp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Sadiqabad");
  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "36a9c3d5558fe89cdb12b8e90348b511";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="grid grid-rows-2 w-full ">
      <div className="flex h-fit mt-6 justify-center">
        <input
          value={search}
          type="search"
          className="p-2 border border-neutral-900 rounded-3xl left-16 top-5 h-10 -ml-1 text-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 focus:to-orange-500 text-white font-semibold"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="">
        {!city ? (
          <div className="flex   justify-center text-3xl font-bold ">
            <div className="flex flex-row justify-center mt-20"> Not Found Data</div>
          </div>
        ) : (
          <div>
            <div className=" flex justify-center gap-4">
              <div className="text-5xl flex flex-col justify-center">
                <FaStreetView className="animate-bounce "/>
              </div>
              <div className="text-2xl flex flex-col justify-center  font-bold">
                {/* {city.name} */}
                {search}  
              </div>
            </div>
            <div className="grid grid-row justify-center mt-8 ">
              <div className="flex flex-row justify-center text-5xl">
                {city.temp}°C
              </div>
              <div className="mt-6 font-semibold">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Temp;
// absolute border border-neutral-900 rounded-3xl left-16 top-5 h-10 -ml-1 text-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 focus:to-orange-500 text-white font-semibold
