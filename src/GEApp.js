import React ,{useState} from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GEApp = ({defaultCategories=[]} ) => {

    const [categories, setCategories]=useState(defaultCategories)
       return (
        <>
            <h2 className="animate__animated animate__zoomIn">Anime GIF Searcher</h2>
            <AddCategory setCategories={setCategories} />

           <ul>
            { categories.map(category =>
            <GifGrid key={category} category={category}></GifGrid>)
            }
           </ul>
        </>
    )
}
