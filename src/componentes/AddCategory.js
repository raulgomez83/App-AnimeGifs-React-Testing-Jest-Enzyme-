import React , {useState} from 'react'
import PropTypes from "prop-types"


export const AddCategory = ({setCategories}) => {
   const [inputValue, setInputValue]= useState("")

   const handleInputChange=(event)=>{
       setInputValue(event.target.value)
   }

   const handleSubmit =(event)=>{
       event.preventDefault( );

     if(inputValue.trim().length>2){
       setCategories(newCategories=>[inputValue,...newCategories,]);
       setInputValue("");
   }
}
    return (
        <>
         <form onSubmit={handleSubmit}>
         <label>Search your favourite anime:</label><br/>
         <input type="text"
                value={inputValue}
                onChange={handleInputChange}>
         </input>
          </form>

         </>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}