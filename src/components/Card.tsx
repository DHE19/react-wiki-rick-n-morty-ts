



interface Props{
    id:number,
    image: string,
    name: string,
    status:string,
    location: {name:string},
}

const Card:React.FC<Props> = ({id,image,name,status,location}) => {


    const getTheRihtColor = ():string =>{
            console.log(status);
            
        switch(status){
            case 'Alive':
                return 'bg-green-500';
            case 'Dead':
                return 'bg-red-500'
            default:
                return 'bg-gray-500'
        }

    }
    return (

        <div className="flex flex-col  justify-center rounded-tl-lg rounded-tr-lg overflow-hidden border-[2.5px]  hover:border-lime-400 cursor-pointer bg-slate-50 hover:bg-lime-50 relative mb-3">
            <span className={`absolute top-0 right-0 inline-block px-2 py-1 mr-2 mt-2 ${getTheRihtColor()} font-semibold rounded-lg text-white text-sm`}>
                {status}
            </span>
            <img src={image} alt={name} />

            <div className="px-4 pb-4 pt-2">
                <h2 className ="font-bold text-2xl mb-2">
                    {name}
                </h2>
                <div className=" text-yellow-600">
                    <p className=" text-sm text-slate-500  font-semibold"> Last Location:</p>
                    <p className=" text-normal font-semibold">{location.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
