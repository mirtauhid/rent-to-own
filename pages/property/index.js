import React from 'react';
import PropertyImage from '../../Components/SubCard/PropertyImage';
import ReactSlider from 'react-slider';
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import HomeLayout from '../../Layouts/HomeLayout';

const index = () => {
    const data = require('./data.json');
    const [areaData, setAreaData] = React.useState();
    //addind selection and checkbox property in data
    React.useEffect(() => {
        const stateData = require('./locations');
        setAreaData(
            stateData.map(d => {
                return {
                    select: false,
                    id: d.id,
                    state: d.state,
                    areas: d.areas.map(d => {
                        return {
                            id: d.id,
                            location: d.location,
                            checkbox: false,
                        }
                    }),
                }
            })
        )
    }, [])
    const [filterState, setFilterState] = React.useState(true);
    //checkbox
    const onChangeValue = input => e => {
        
    }
    const clearAll = () => {

    }

    return (
        <HomeLayout>
        <div className="px-5 md:flex md:flex-row">
            {/* Filter */}
            <div className="smd:w-1/3 flex justify-center">
                <div className="w-40 mt-10">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xs">FILTER</p>
                        <div 
                            className="bg-primary hover:bg-green-500 w-12 h-6 rounded flex items-center justify-center cursor-pointer"
                            onClick={clearAll}
                        >
                            <p className="text-xs text-gray-100 scale-75">CLEAR</p>
                        </div>
                        <div className="justify-self-end cursor-pointer p-2" 
                            onClick={() => setFilterState(
                                state => !state
                            )}
                        >
                            {filterState ? <BiDownArrow /> : <BiRightArrow/> }
                        </div>
                    </div>
                    { filterState ? (
                        <div>
                            <div className="pt-2" />
                            <hr className=""/>
                            {/* List */}
                            <p className="text-xs pt-4">LISTING TYPES</p>
                            <div className="pt-2 text-xs">
                                <input 
                                    type="radio" 
                                    className="pl-4 checked:bg-red"
                                    value="quoteafterorder"
                                    name="deliveryFeeOption"
                                    onChange={onChangeValue("deliveryFeeOption")}
                                /> All Listing Types
                            </div>
                            <div className="pt-2 text-xs">
                                <input 
                                    type="radio" 
                                    className="pl-4"
                                    value="quoteafterorder"
                                    name="deliveryFeeOption"
                                    onChange={onChangeValue("deliveryFeeOption")}
                                /> Available Properties
                            </div>
                            <div className="pt-2 text-xs">
                                <input 
                                    type="radio" 
                                    value="quoteafterorder"
                                    name="deliveryFeeOption"
                                    onChange={onChangeValue("deliveryFeeOption")}
                                /> Available Properties - Online Payments
                            </div>
                            <div className="pt-4"></div>
                            <hr className=""/>
                            {/* list of areas */}
                            { areaData?.map(item => (
                                <div className=" mt-2 text-sm" key={item?.id}>
                                    <div className="grid grid-cols-2">
                                        <p>{item?.state}</p>
                                        <div className="justify-self-end mt-1 cursor-pointer" 
                                            onClick={() => setAreaData(
                                                areaData?.map(state => {
                                                    if(item.id === state.id){
                                                        state.select = !state.select;
                                                    }
                                                    return state;
                                                })
                                            )
                                        }>
                                            {item?.select ? <BiDownArrow /> : <BiRightArrow/> }
                                        </div>
                                    </div>
                                    {item?.select ? (
                                        item?.areas?.map(item1 => (
                                            <div className="ml-4 mt-2" key={item1?.id}>
                                                <input 
                                                    type="checkbox" 
                                                    checked={item1?.checkbox} 
                                                    id="getarea" name="getarea" 
                                                    value="Bike"
                                                    onChange={event => {
                                                        let checked = event.target.checked;
                                                        setAreaData(areaData?.map(data => {
                                                            data.areas.map(d => {
                                                                if(item1.id === d.id) {
                                                                    d.checkbox = checked;
                                                                }
                                                                return d;
                                                            })
                                                            return data;
                                                        }))
                                                    }}
                                                ></input>
                                                <label className="ml-2">{item1.location}</label><br></br>
                                            </div>
                                        ))
                                    ) : null}
                                </div>
                            ))}
                            {/* Slider */}
                            <div className="pt-4"></div>
                            <hr className=""/>
                            <div className="py-2 text-xs">
                                <p>PRICE</p>
                            </div>
                            <div className="relative">
                                <ReactSlider
                                    className="bg-gray-400 text-white cursor-pointer"
                                    thumbClassName="h-6 w-6 bg-gray-700 grid justify-center rounded-full mb-2 absolute -top-2 text-gray-700"
                                    trackClassName="bg-gray-400 h-1"
                                    defaultValue={[0, 100]}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                />
                            </div>

                            <div className="pt-6 flex flex-between">
                                <div className="border">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2"
                                        placeholder="MIN"
                                        //value={inputData.phone}
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                                <div className="border ml-14">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2"
                                        placeholder="MAX"
                                        //value={inputData.phone}
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                            </div>

                            <div className="pt-8"></div>
                            <hr className=""/>
                            <div className="py-2 text-xs">
                                <p>AREA (sqft)</p>
                            </div>
                            <div className="relative">
                                <ReactSlider
                                    className="bg-gray-400 text-white cursor-pointer"
                                    thumbClassName="h-6 w-6 bg-gray-700 grid justify-center rounded-full mb-2 absolute -top-2 text-gray-700"
                                    trackClassName="bg-gray-400 h-1"
                                    defaultValue={[0, 100]}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                />
                            </div>

                            <div className="pt-6 flex flex-between">
                                <div className="border">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2"
                                        placeholder="MIN"
                                        //value={inputData.phone}
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                                <div className="border ml-14">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2"
                                        placeholder="MAX"
                                        //value={inputData.phone}
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {/* Cards for single property*/}
            <div
                className="grid flex-2 grid-cols-1 smd:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center xl:grid-cols-3 py-5 gap-7 smd:gap-4">
                {data?.map(item => (
                    <div key={item.id.toString()}>
                        <PropertyImage
                            key={item.id.toString()}
                            title={item.title}
                            host={item.host}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
        </HomeLayout>
    )
}

export default index
