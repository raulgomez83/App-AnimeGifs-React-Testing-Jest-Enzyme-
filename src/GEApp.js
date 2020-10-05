import React ,{useState} from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GEApp = () => {

    const [categories, setCategories]=useState(["Attack on Titan","Death note","Boku no hero","One punch man", "Naruto"])
       return (
        <>
            <h2>Anime GIF Searcher</h2>
            <AddCategory setCategories={setCategories} />

           <ul>
            { categories.map(category =>
            <GifGrid key={category} category={category}></GifGrid>)
            }
           </ul>
        </>
    )
}
