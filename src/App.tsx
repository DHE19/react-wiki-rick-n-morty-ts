import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import { IData } from './type';



function App() {
  
  const api = `https://rickandmortyapi.com/api/character/?page=2 `;
  const [fetchData, setFetchData] = useState<IData>({} as IData);


 /* FETCH DATA && USE EFFECT */
 
 useEffect(() => {    
   (async () =>{
     const data = await fetch(api).then(res => res.json());
     setFetchData(data);
    })();
  }, [api]);

  /* FETCH DATA && USE EFFECT */



  return (
    <div className="App w-full">
      <h1 className="text-center mb-3">
        Rick & Morty!
      </h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          { fetchData.results ? 
          (
            fetchData.results.map(({id,image,name,status,location}) => <Card 
            key={id}
            id={id}
            status={status}
            image={image} 
            name={name}
            location={location} 
            />)
          )
          : <p>No hay datos</p>}
        </div>
      </div>
    </div>
  )
}

export default App
