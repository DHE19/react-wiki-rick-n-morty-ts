import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface Props {
    pagenumber: number;
    count:number,

    updatePageNumber(num:number):void;

}
const Pagination:React.FC<Props> = ({pagenumber,updatePageNumber,count}) => {

    const pageChange = (data: { selected: number; }) =>{
        updatePageNumber(data.selected + 1);
    }
       
    return (
        <div className="flex justify-center py-5 w-full bg-slate-300 "> 
            <ReactPaginate className="flex gap-4 md:gap-6 items-center "
                nextLabel="Next"
                previousLabel="Prev"
                previousClassName="inline-block bg-blue-800 text-white py-1 md:py-2 px-2 text-sm md:px-3 rounded-lg"
                nextClassName="inline-block bg-blue-800 text-white py-1 md:py-2 px-2 text-sm md:px-3 rounded-lg"
                activeClassName="inline-block bg-lime-500 text-white py-1 md:py-2 px-2 text-sm md:px-3 rounded-lg"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                forcePage={pagenumber === 1 ? 0:pagenumber-1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                pageCount={count}
                onPageChange={pageChange}
                
            />
        </div>
    )
}

export default Pagination
