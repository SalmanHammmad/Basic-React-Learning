import React from 'react';
import './Search.css'


const SearchBox = ({ label, handleSubmit, name, setName }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{label}</label>
        <input 
          type="text" 
          value={name}
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}   
        />  
        <button type="submit">ENTER</button> 
        <br />
        <br />     
      </form>  
    </>
  );
};

export default SearchBox;
