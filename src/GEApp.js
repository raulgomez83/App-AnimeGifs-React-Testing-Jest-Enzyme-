import React ,{useState} from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GEApp = () => {

    const [categories, setCategories]=useState(["One Piece"])
       return (
         <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

           <ul>
            { categories.map(category =>
            <GifGrid key={category} category={category}></GifGrid>)
            }
           </ul>
        </>
    )
}
