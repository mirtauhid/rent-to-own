import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';
import buyersData from '../../../../Assets/buyers.json';
import BuyerCard from './BuyerCard';

const SubBuyerList = () => {
    const [tempBuyers, setTempBuyers] = useState(buyersData);
    const [buyers, setBuyers] = useState(buyersData);
    const [pageNumber, setPageNumber] = useState(0);

    const buyersPerPage = 8;
    const buyersVisited = pageNumber * buyersPerPage;
    const pageCount = Math.ceil(buyers.length / buyersPerPage);
    const displayBuyers = buyers.slice(buyersVisited, buyersVisited + buyersPerPage);

    const handleFilterBuyers = (e) => {
        if (e.target.value === 'preQualified') {
            setBuyers(tempBuyers.filter((profile) => profile.preQualified === true));
        } else if (e.target.value === 'notPreQualified') {
            setBuyers(tempBuyers.filter((profile) => profile.preQualified === false));
        } else if (e.target.value === 'all') {
            setBuyers(tempBuyers);
        }
    }

    return (
        <div>
            <div className="w-full flex flex-wrap">
                <div className="w-1/2 flex flex-wrap items-end">
                    <div className="lg:w-2/3">
                        <h2 className="text-lg font-bold mx-2">All Buyer </h2>
                        <p className="text-sm mx-2">( Showing {buyersPerPage} from {buyers.length} Buyer )</p>
                    </div>
                    <div className="lg:w-1/3 px-2">
                        <select
                            onChange={handleFilterBuyers}
                            className="w-full h-10 rounded border mt-3">
                            <option value="all">All</option>
                            <option value="preQualified">Pre Qualified</option>
                            <option value="notPreQualified">Not Pre Qualified</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/2 flex items-end mt-5 md:mt-0">
                    <div className="w-full relative mx-2 text-gray-600 border-2 border-gray-200 bg-white  rounded-md ">
                        <BiSearchAlt2 className="text-2xl absolute left-2 top-2 " />
                        <input className="w-full h-10 px-5 pl-10  rounded-lg  text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                    </div>
                </div>

                <div className="w-full mt-5 flex flex-wrap">
                    {
                        displayBuyers?.map((profileData) => <BuyerCard key={profileData.id} profileData={profileData} />)
                    }
                </div>

                <div className="w-full mt-5 smd:flex flex-wrap justify-between">
                    <button className="bg-primary text-white rounded py-2 px-8 mx-2">Add Buyer</button>
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={({ selected }) => setPageNumber(selected)}
                        containerClassName="flex px-1 mt-4 smd:mt-0"
                        nextLabel="&raquo;"
                        nextClassName="w-10 h-10 flex items-center justify-center bg-white border mx-1 rounded"
                        previousLabel="&laquo;"
                        previousClassName="w-10 h-10 flex items-center justify-center bg-white border mx-1 rounded"
                        pageClassName="w-10 h-10 flex items-center justify-center bg-white border mx-1 rounded"
                        pageLinkClassName="w-10 h-10 flex items-center justify-center"
                        activeLinkClassName="w-10 h-full flex items-center justify-center bg-primary text-white border rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default SubBuyerList;