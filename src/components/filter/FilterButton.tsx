interface IProps{
    name:string,
    updateStatus(s:string):void;
    updateNumber(n:number):void;
}
const FilterButton:React.FC<IProps> = ({updateNumber,updateStatus, name}) => {


    const handleOnClick =()=>{
        updateNumber(1);
        updateStatus(name);
    }
    return (
        <button
        type="submit"
        className="py-2 my-1 w-24 text-sm ring-1 ring-blue-500 hover:bg-blue-600 text-blue-600 hover:text-blue-100 rounded-xl shadow-sm shadow-blue-800 mx-auto"
        onClick={handleOnClick}
        >
            {name}
        </button>
    )
}

export default FilterButton
