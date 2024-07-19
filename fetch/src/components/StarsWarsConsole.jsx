import React, { useState, useEffect} from "react";

const StarsWarsConsole = () => {

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
     
    }
     catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getStarsWars();
 }, []);


 const [C3POFilm, setC3POFilm] = useState([]);


  const C3PO = async () => {
  	try {
  		const response = await fetch("https://swapi.dev/api/people");
  		const data = await response.json();
      const peopleData=data.results
      const findC3PO=peopleData.find((person )=> {return person.name === "C-3PO"});
     
      const lukeSkywalkerFilms=(findC3PO.films).map(async (film)=>{
               const C3POFilms=await fetch(film);

               const  dataFilmSC3PO=await C3POFilms.json()
        setC3POFilm(dataFilmSC3PO)
        return
        
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        C3PO();
     }, []);
    




  return (
    <div>StarsWarsConsole REVISA CONSOLA</div>
  )
}

export default StarsWarsConsole