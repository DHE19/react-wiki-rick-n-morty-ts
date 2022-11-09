import * as React from 'react';
import Card from '../components/Card';
import InputGroup from '../components/filter/InputGroup';
import { IDataEpisode, R_M_data } from '../type';


const TOTAL_CAPS = 51;

const Episodes = () => {
    const [id, setId] = React.useState(9);
    const [episodeInfo, setEpisodeInfo] = React.useState<IDataEpisode | null>(null);
    const [characters, setCharacters] = React.useState<[R_M_data] | null>(null);
    const api = `https://rickandmortyapi.com/api/episode/${id}`;

    const fetchDataEpisode = async () =>{
        const data = await fetch(api).then(res => res.json());
        setEpisodeInfo(data);
    }
    const fetchDataCharacters = async () =>{
        if(!episodeInfo) return;
        const a = await Promise.all(episodeInfo!.characters.map(x => fetch(x).then(res => res.json())));
         setCharacters(a as [R_M_data]);
    }
    React.useEffect(() =>{
        fetchDataEpisode();
    },[api]);

    React.useEffect(() =>{
        fetchDataCharacters();
    },[episodeInfo]);
    
    return (
        <div className='w-full pt-5 bg-slate-300'>
            <div className='my-10'>
                <h1 className='text-center text-4xl my-2 font-bold'>Nombre del Episodio: <span className='text-lime-600'>{episodeInfo?.name}</span></h1>
                <p className='text-center my-2'>Fecha De Salida: {episodeInfo?.air_date}</p>
                <p className='text-center my-2 font-[300]'>Full Path: {episodeInfo?.episode}</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-slate-300 py-4 mt-[-1.23rem] px-5">
                <div className='col-span-12 lg:col-span-3 relative mb-9'>
                    <div className='w-full bg-white rounded-lg py-7 shadow-lg'>
                        <h3 className='text-center text-lg font-semibold text-slate-700'> Selecciona el Episodio</h3>
                        <InputGroup
                            changeID={setId}
                            total={TOTAL_CAPS}/>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-7 md:mx-5 lg:mx-10 col-span-12 lg:col-span-9">
                    { characters ? 
                    (
                        characters.map(({id,image,name,status,location}) => 
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
        </div>
    )
}

export default Episodes
