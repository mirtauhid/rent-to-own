import React from 'react';
import style from './style.module.css';

const SubHeroSection = () => {
    return (
        <div className="container m-auto">
            <div className={style["pricing-hero-container"]}>
                <div className="bg-black rounded-2xl opacity-30 absolute top-0 w-full h-full -z-10"></div>
                <h1 className="text-center text-xl sm:text-2xl smd:text-3xl md:text-4xl lg:text-5xl font-bold text-white mx-12 lg:mx-48 z-0">List your home in minutes
                    with our Self-Service plan.</h1>
            </div>
        </div>
    );
};

export default SubHeroSection;