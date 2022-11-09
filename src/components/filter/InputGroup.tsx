interface IProps {
    changeID(n:number):void,
    total:number,
}

const InputGroup:React.FC<IProps> = ({total,changeID}) => {
    const handleChangeID =(e:React.ChangeEvent<HTMLSelectElement>) => changeID(Number(e.target.value));
    return (
            <select 
            className="block w-[80%] mx-auto mt-5 bg-slate-100 ring-2 ring-slate-800 border-2 shadow-lg text-slate-700 border-slate-400 py-[10px] px-2 rounded-lg"
            onChange={handleChangeID}>
                <option value='1'>Choose...</option>
                {[...Array(total).keys()].map((x) => (<option  key={x} value={x+1}> Episodio - {x+1}</option>))}
            </select>
    )
}

export default InputGroup
