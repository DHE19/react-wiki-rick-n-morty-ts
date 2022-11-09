export type R_M_data ={
    id: number,
    name:string,
    status: 'Alive' | 'Dead' | 'unknown',
    created:string,
    gender: 'Male' | 'Female' | 'unknown',
    episode: [string],
    image:string,
    location:{name:string},
    origin:any,
    species: string,
    type:string,
    url:string,
}
export  interface IDataCharacter{
    info: {
        count:number,
        next:string,
        pages:number,
        prev:string | null,
    },
    results: [R_M_data];
}   


export interface IDataEpisode {
    name:string,
    episode:string,
    air_date:string,
    characters:Array<string>,
}
