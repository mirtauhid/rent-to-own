import React, { useState } from 'react'
import Link from "next/link";
import style from "./style.module.css";
import About from '../../SubPage/SubDetailsTab/About';
import Capacity from '../../SubPage/SubDetailsTab/Capacity';
import Interior from '../../SubPage/SubDetailsTab/Interior';
import Exterior from '../../SubPage/SubDetailsTab/Interior';
import { IoMdTimer } from "react-icons/io";
import Carousel from './Carousel';

const index = ({item, title, host, price, images}) => {
    const [component, setComponent] = useState('About');
    return (
        <div className="w-full border">
            {/* <img src="https://picsum.photos/200/300" alt="" className="h-96 w-full object-center object-cover" /> */}
            {images && <Carousel className="w-full h-40" images={images}/>}
            <div className="p-3 pt-8">
                <div className="">
                    <Link href={"/housesearch/" + item.id} key={item.id}>
                        <a>
                            <p className="text-lg font-semibold hover:underline cursor-pointer">{title}</p>
                        </a>
                    </Link>
                    <p className="text-xs text-gray-400 pt-1">{host}</p>
                    <h1 className="text-xl mt-2 font-bold flex-1 text-primary">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>

                    <div className="bg-green-200 flex flex-row items-center p-3 rounded mt-3">
                        <IoMdTimer />
                        <p className="text-xs text-gray-400 ml-3">We estimate this home will sell faster than 100% nearby</p>
                    </div>
                </div>
                
                <div className={style["settings-tab"]}>
                    <div
                        className={`text-sm cursor-pointer font-medium pb-2 pt-2 ${
                            component === "About"
                            ? "border-b-4 border-primary"
                            : null
                        }`}
                        onClick={() => setComponent('About')}
                    >
                    About
                    </div>

                    <div
                        className={`text-sm ml-5 cursor-pointer font-medium pb-2 pt-2 ${
                            component === "Capacity"
                            ? "border-b-4 border-primary pb-1"
                            : null
                        }`}
                        onClick={() => setComponent('Capacity')}
                        >
                        Capacity
                    </div>

                    <div
                        className={`text-sm ml-5 cursor-pointer font-medium pb-2 pt-2 ${
                            component === "Interior"
                            ? "border-b-4 border-primary pb-1"
                            : null
                        }`}
                        onClick={() => setComponent('Interior')}
                        >
                        Interior
                    </div>
                    <div
                        className={`text-sm ml-5 cursor-pointer font-medium pb-2 pt-2 ${
                            component === "Exterior"
                            ? "border-b-4 border-primary pb-1"
                            : null
                        }`}
                        onClick={() => setComponent('Exterior')}
                        >
                        Exterior
                    </div>
                </div>

                {component === "About" ? (
                <About description={item.description}/>
                ) : component === "Capacity" ? (
                <Capacity propertyDetails={item}/>
                ) : component === "Interior" ?(
                <Interior property={item.PropertyFeatures} />
                ) : (
                    <Exterior property={item.PropertyFeatures} />
                )}
            </div>
            
        </div>
    )
}

export default index
