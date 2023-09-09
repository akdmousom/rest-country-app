import Country from "../Country/Country";

const Countrys = ({ country, handleVisitedCountry }) => {
   
 
  

  
  return (
  
      <div>
      
        <div><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country></div>
      </div>
  
  );
};

export default Countrys;
