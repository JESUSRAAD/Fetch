import React, { useState, useEffect} from "react";


 const StarWarsCard = ({element,index}) => {


    const [planets, setPlanents] = useState([]);

    const getStarsWars = async () => {
        try {
          const response = await fetch(element.homeworld);
          const data = await response.json();
          
       setPlanents(data)

        }
         catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getStarsWars();
     }, []);

    

  return (
    <div className='flex flex-col justify-evenly  items-center w-44 min-w-max h-80 min-h-max rounded-xl bg-[url("https://wallpapercave.com/wp/wp11249925.jpg")]  bg-cover shadow-md'>
        <div className='flex justify-center items-center w-[70%] h-[60%] border border-slate-950 '> <p className='text-black'>{index}</p></div>
        <div className="w-[90%] h-[30%] bg-neutral-200 text-center">
            <h2 className='text-xl'>{element.name}</h2>
            <h3 className='text-base'>{planets.name}</h3>
            <div className='flex justify-around text-xs '>
                <p>Height:{element.height}</p>
                <p>Mass:{element.mass}</p>
            </div>
        </div>
    </div>
  )
}

export default StarWarsCard