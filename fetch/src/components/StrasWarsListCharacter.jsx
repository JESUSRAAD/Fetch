import React, { useState, useEffect} from "react";
import StarWarsCard from "./StarWarsCard";

const StrasWarsListCharacter = () => {
  ///https://swapi.dev/api/people

  const [peopleDataCard, setPeopleDataCard] = useState([]);

  const getStarsWars = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const peopleData = data.results;
      setPeopleDataCard(peopleData)

      return peopleData;
    }
     catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getStarsWars();
 }, []);





  



  return (<div>

<div>
  
</div>

    <div className="flex flex-wrap gap-4">
      {peopleDataCard.map((people,i) => {
        
       return <StarWarsCard
       key={i}
       index={i}
       element={people}
       />;
      })}
      {/* <StarWarsCard/> */}
    </div>
      </div>
  );
};

export default StrasWarsListCharacter;