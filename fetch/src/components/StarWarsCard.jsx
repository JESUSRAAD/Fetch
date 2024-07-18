import React from 'react'

 const StarWarsCard = ({index, name,planet,height,mass}) => {
    // {key, img,name,planet,height,mass}
  return (
    <div className='flex flex-col justify-evenly  items-center w-32 min-w-max h-72 min-h-max rounded-xl bg-green-300 shadow-md'>
        <div className='flex justify-center items-center w-[70%] h-[60%] border border-slate-950 '> <p className='text-black'>{index}</p></div>
        <div className="w-[90%] h-[30%] bg-neutral-200 text-center">
            <h2 className='text-xl'>{name}</h2>
            <h3 className='text-base'>{planet}</h3>
            <div className='flex justify-around text-xs '>
                <p>Height:{height}</p>
                <p>Mass:{mass}</p>
            </div>
        </div>
    </div>
  )
}

export default StarWarsCard