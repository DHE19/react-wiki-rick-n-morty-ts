import FilterButton from "./FilterButton";

interface IProps {
    updateStatus(s:string):void;
    updateGender(s:string):void;
    updateSpecies(s:string):void;
    updatePagenumber(n:number):void;
}
const status =['Alive','Dead','Unknown'];
const type = ['Human','Alien','Humanoid','Poopybutthole','Mythological','Unknown','Animal','Disease','Cronenberg','Planet']
const gender =['female','male','genderless','unknown']
const Filter:React.FC<IProps> = ({updateGender,updatePagenumber,updateStatus,updateSpecies}) => {
    
    const clear = () => {
        updateStatus('');
        updateGender('');
        updateSpecies('');
        updatePagenumber(1);
    }
    
    return (
        <div className="col-span-12 lg:col-span-3 relative mb-9">
            <div className="flex items-center justify-center rounded-lg w-full overflow-hidden shadow-lg">
            <div className="bg-white w-full">
                <div className="container flex flex-col justify-center mx-auto p-4">
                    <h2 className="text-xl text-center font-semibold">
                        Filters
                    </h2>
                    <p className="mt-4 mb-4 text-sky-600 cursor-pointer" onClick={clear}>
                       Clear Filters
                    </p>
                       {/* /***********************STATUS************************ */}
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-lime-600 ">
                            <summary className="px-4 py-4 text-slate-700 font-semibold cursor-pointer ">
                                Status
                            </summary>
                            <div className="px-2 pb-4  grid grid-cols-3 lg:grid-cols-2 ">
                            {status.map((it,i) =>(<FilterButton
                                name={it}
                                key={i}
                                updateStatus={updateStatus}
                                updateNumber={updatePagenumber} 
                                />) )}
                            </div>
                        </details>
                    </div>
                        {/* /***********************STATUS************************ */} 
                        {/* /***********************TYPE************************ */} 

                    <div className="space-y-4 mt-4">
                        <details className="w-full rounded-lg ring-1 ring-lime-600 ">
                            <summary className="px-4 py-4 text-slate-700 font-semibold cursor-pointer ">
                                Specie
                            </summary>
                            <div className="px-2  pb-6  grid grid-cols-4 lg:grid-cols-2 ">
                            {type.map((it,i) =>(<FilterButton
                                name={it}
                                key={i}
                                updateStatus={updateSpecies}
                                updateNumber={updatePagenumber} 
                                />) )}
                            </div>
                        </details>
                    </div>
                                {/* /***********************TYPE************************ */} 

                                {/* /***********************GENDER************************ */} 
                    <div className="space-y-4 mt-4">
                        <details className="w-full rounded-lg ring-1 ring-lime-600 ">
                            <summary className="px-4 py-4 text-slate-700 font-semibold cursor-pointer ">
                                Gender
                            </summary>
                            <div className="px-2  pb-6  grid grid-cols-4 lg:grid-cols-2 ">
                            {gender.map((it,i) =>(<FilterButton
                                name={it}
                                key={i}
                                updateStatus={updateGender}
                                updateNumber={updatePagenumber} 
                                />) )}
                            </div>
                        </details>
                    </div>
                                {/* /***********************GENDER************************ */} 
                </div>
            </div>
        </div>
        </div>
    )
}

export default Filter
