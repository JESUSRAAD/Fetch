import React, { useState, useEffect} from "react";
import StarWarsCard from "./components/StarWarsCard";

const App = () => {
  ///https://swapi.dev/api/people

  const [peopleDataCard, setPeopleDataCard] = useState([]);

  const getStarsWars = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      const peopleData = data.results;
      setPeopleDataCard(peopleData)
      const findDarkVader = peopleData.find((person) => {
        return person.name === "Darth Vader";
      });
      const findLukeSkywalker = peopleData.find((person) => {
        return person.name === "Luke Skywalker";
      });
      const lukeSkywalkerFilms = findLukeSkywalker.films.map(async (film) => {
        const responseFilmSkayWalker = await fetch(film);
        const dataFilmSkayWalker = await responseFilmSkayWalker.json();
        console.log(dataFilmSkayWalker.title);
      });
      const findLeiaOrgana = peopleData.find((person) => {
        return person.name === "Leia Organa";
      });
      const leiaPlanet = await fetch(findLeiaOrgana.homeworld);
      const dataPlanetLeia = await leiaPlanet.json();
      console.log(peopleData);
      console.log(findDarkVader);
      console.log(dataPlanetLeia);
      return peopleData;
    }
     catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getStarsWars();
 }, []);
console.log(peopleDataCard);




  // const C3PO = async () => {
  // 	try {
  // 		const response = await fetch("https://swapi.dev/api/people");
  // 		const data = await response.json();
  //     const peopleData=data.results
  //     const findC3PO=peopleData.find((person )=> {return person.name === "C-3PO"});
  //     const C3POFilm=[]
  //     const lukeSkywalkerFilms=(findC3PO.films).map(async (film)=>{
  //              const C3POFilms=await fetch(film);

  //              const  dataFilmSC3PO=await C3POFilms.json()
  //       C3POFilm.push(dataFilmSC3PO)
  //           })
  // console.log(C3POFilm);
  // 	}
  // 	catch (error) {
  // 		console.log(error);
  // 	}
  // }
  // C3PO()



  return (
    <div className="flex flex-wrap gap-4">
      {peopleDataCard.map((people, i) => {
        
       return <StarWarsCard
          key={i}
          index={i}
          name={people.name}
          planet={people.homeworld}
          height={people.height+" cm"} 
          mass={people.mass+" Kg"}
        />;
      })}
      {/* <StarWarsCard/> */}
    </div>
  );
};

export default App;
