import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
   

 const {data:images,loading} = useFetchGifs(category);



    return (<> {/* = <div></div> */}
    <h3>{category}</h3>  
     {loading}
    <div className="card-grid">
            
    {images.map(img =>( /* en vez de img{id,title}no se pone el img.*/
        <GifGridItem key={img.id} {...img}/>
        ))
        }
            </div> 
        </>
    )
}