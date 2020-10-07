

export const getGifs= async(category) =>{
    const url=`https://api.giphy.com/v1/gifs/search?limit=15&q=${encodeURI(category)}&api_key=hZPt5qG1klvSQ1rRLs3vXHkbRMDIyL8g`;
    const res= await fetch(url);
    const {data}= await res.json();
    
    const gifs=data.map(img=>{
           return{
               id:img.id,
               title:img.title,
               url:img.images?.downsized_medium.url}
            })
     return gifs;
    
    }
     
