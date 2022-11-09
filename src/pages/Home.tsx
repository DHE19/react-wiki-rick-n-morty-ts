import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/filter/Filter";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { IDataCharacter } from "../type";


const Home = () => {
const [fetchData, setFetchData] = useState<IDataCharacter>({} as IDataCharacter);
  const [search, setSearch] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 /* FETCH DATA && USE EFFECT */
 
 useEffect(() => {    
  console.log('actualizando', api);
  
   (async () =>{
     const data = await fetch(api).then(res => res.json());
     setFetchData(data);
    })();
  }, [api]);

  /* FETCH DATA && USE EFFECT */


  return (
    <div className="App w-full">
     

      <Search setSearch={(setSearch)} updatePageNumber={setPageNumber}/>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-slate-300 py-4 mt-[-1.23rem] px-5">
        <Filter
          updatePagenumber={setPageNumber}
          updateStatus={setStatus}
          updateGender={setGender}
          updateSpecies={setSpecies}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-7 md:mx-5 lg:mx-10 col-span-12 lg:col-span-9">
          { fetchData.results ? 
          (
            fetchData.results.map(({id,image,name,status,location}) => 
            <Card 
            key={id}
            status={status}
            image={image} 
            name={name}
            location={location} 
            />)
          )
          : (<p>No hay datos</p>)}
        </div>
      </div>

      <Pagination
        count={fetchData?.info?.pages}
        pagenumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </div>
  )
}

export default Home
