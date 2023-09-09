import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Countrys from "./components/Countrys/Countrys";

function App() {
  const [countrys, setCountrys] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([])

  const handleVisitedCountry =(visitedCountrys) =>{
    const newVisitedCountryList = [...visitedCountry, visitedCountrys]
    setVisitedCountry(newVisitedCountryList)
    
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);



  return (
    <div className="container mx-auto">
      <h1 className="text-center py-5 text-4xl font-bold text-white">
        REST COUNTRY APP
      </h1>

      <div className="bg-white mx-auto rounded-lg p-5 m-5 w-full h-auto">
        <h1 className="text-3xl text-center font-bold text-black">
          Visited Country List
        </h1>
        <hr />
       
       {
        visitedCountry.map((country, idx) => <li key={idx} className="text-black text-3xl  font-semibold">{country}</li>)
       }

      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countrys.map((country, idx) => (
          <Countrys handleVisitedCountry={handleVisitedCountry} key={idx} country={country}></Countrys>
        ))}
      </div>
    </div>
  );
}

export default App;
