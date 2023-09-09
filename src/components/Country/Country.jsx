import { useState } from "react";

const Country = ({country, handleVisitedCountry}) => {

    const { name, flags, population, timezones } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

  return (
    <div className={visited ? "card  grid items-center bg-emerald-400 h-[500px] text-white shadow-xl" : "card  h-[500px] grid items-center text-black bg-white shadow-xl"}>
    <figure>
      <img className="w-[200px] h-[200px] p-5"
        src={flags.png}
        alt={name.common}
      />
    </figure>
    <div className="card-body">
    {
        visited && <div className="badge badge-secondary">Visited</div>
    }
      <h2 className="card-title">{name.common}</h2>
      <p >{name.common} Population is: {population}</p>
      
      <div className="card-actions justify-end">
        <button onClick={handleVisited} className="btn btn-primary">Visited</button>
        <button onClick={()=>handleVisitedCountry(country.name.common)} className="btn btn-primary">List Visited</button>
      </div>
    </div></div>
  )
};

export default Country;
