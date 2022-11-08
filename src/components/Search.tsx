interface IProps{
    setSearch(s:string):void;
    updatePageNumber(n:number):void;
}

const Search:React.FC<IProps> = ({updatePageNumber, setSearch}) => {
    
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>e.preventDefault();
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        updatePageNumber(1) 
        setSearch(e.target.value);}
    return (
        <div className="my-5 relative z-30 shadow-xl py-4 ">
            <form className="w-[95%] md:w-[70%] lg:w-[40%] mx-auto flex items-center relative" onSubmit={handleSubmit}>
                <input  
                type="text"
                onChange={handleInput}
                placeholder="Search for characters" 
                className=" w-full py-2 pl-3 focus:outline-lime-500 text-gray-400 focus:text-slate-500 font-semibold border-2 rounded-lg bg-slate-200"/>

                <button
                    className="absolute right-0 mr-1 inline-block px-2 font-semibold py-[6px] rounded-lg bg-blue-800 hover:bg-green-500 hover:text-slate-700 text-white"
                    type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search
