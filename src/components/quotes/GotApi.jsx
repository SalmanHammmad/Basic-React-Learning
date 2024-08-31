import { useEffect, useState } from 'react';
import SearchBox from './Search';
import InfoBox from './InfoBox';
import './GotApi.css'

const GotApi = () => {
  const [name, setName] = useState('arya');
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);

  const apiUrl = 'https://api.gameofthronesquotes.xyz/v1/author';
  const fetchGotInfo = async () => {
    try {

      const result = await fetch(`${apiUrl}/${name.toLowerCase().split(' ')[0]}`);
      
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
  
      const jsonResult = await result.json(); // Parse the response as JSON
  
      if (!jsonResult || !jsonResult.sentence || !jsonResult.character) {
        throw new Error('Incomplete data received from API.');
      }
  
      const info = {
        quote: jsonResult.sentence || 'No quote available',
        name: jsonResult.character.name || 'Unknown',
        house: jsonResult.character.house?.name || 'Unknown',
      };
  
      return info;
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError(err.message);
      return null;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const fetchedData = await fetchGotInfo();
    if (fetchedData) {
      setData(fetchedData);
    }
    
  };

  
  return (
    <>

      <img className='logo' src="./public/got/logo.jpg" alt="" />
      <SearchBox label={"Character Name"} name={name} setName={setName} handleSubmit={handleSubmit} />

      {error ? (<div>Error: {error}</div>) 
             : (data && <InfoBox info={data} img={name}  handleSubmit={handleSubmit}/>)
      }
    </>
  );
};

export default GotApi;
