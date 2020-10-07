import { useState,useEffect } from "react"
import {getGifs} from "../helpers"  

export  const useFetchGifs = (category) => {
 const [state, setState] = useState({
    data:[],
    loading:true
  });
          //useEffect hace que la función se ejecute cuando el componente es renderizado por primera vez
    useEffect( ()=>{ 
        getGifs(category)
        .then(images=>{
           setState({
               data:images,
               loading:false
            });
     })
    },[category]) ;
return state;  //state  {data:[], loading:true}
}

