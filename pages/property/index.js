import React from 'react';
import PropertyImage from '../../Components/SubCard/PropertyImage';
import ReactSlider from 'react-slider';
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import HomeLayout from '../../Layouts/HomeLayout';
import { useRouter } from "next/router"

const index = () => {
    const router = useRouter()
    const {
        query: { state },
    } = router
    const stateData = require('./locations');
    const [areaData, setAreaData] = React.useState();
    const [initData, setInitData] = React.useState();
    const [filterState, setFilterState] = React.useState(true);
    const [filterOptions, setFilterOptions] = React.useState();
    const [listingType, setListingType] = React.useState(2);
    const [price, setPrice] = React.useState([0, 100]);
    const [areaSqft, setAreaSqft] = React.useState([0, 100]);

    const resetAll = () => {
        setAreaData(stateData.map(d => {
            return {
                select: false,
                id: d.id,
                state: d.state,
                areas: d.areas.map(d => {
                    return {
                        id: d.id,
                        location: d.location,
                        checkbox: false,
                        places: d.places
                    }
                }),
            }
        }))
    }

    const initialData = () => {
        const dummy = [];
        areaData?.map(step1 => {
            step1.areas.map(step2 => {
                step2.places.map(step3 => {
                    dummy.push(step3);
                })
            })
        })
        setInitData(dummy)
        setFilterOptions(dummy);
    }
    //clear filtering
    const clearAll = () => {
        setListingType(2);
        setPrice([0, 100]);
        setAreaSqft([0, 100]);
        resetAll();
        initialData();
    }

    //reset all
    React.useEffect(() => {
        resetAll();
    }, [stateData])
    
    //initial data
    React.useEffect(() => {
        initialData();
        //doFilter();
    }, [areaData])
    
    //checkbox
    const onChangeValue = input => e => {
        setListingType(e.target.value);
        console.log(listingType);
    }

    //main filtering
    const doFilter = async () => {
        const holder = [];
        await areaData?.map(step1 => {
            if(step1.select === true) {
                step1.areas.map(step2 => {
                    if (step2.checkbox === true) {
                        holder.push(step2.location);
                    }
                })
            }
        })
        
        const dummyAreaFilter = holder.length === 0 ? initData : initData.filter(item => holder.includes(item.location))

        const priceFilter = dummyAreaFilter.filter(
            item => 
                item.price >= (price[0]*10000) && item.price<= (price[1]*10000)
        )
        
        const sqftFilter = priceFilter.filter(item => item.sqft >= (areaSqft[0]*100) && item.sqft <= (areaSqft[1]*100))

        const dummyListFilter = 
        listingType != 2 && sqftFilter.filter(item => item.type == listingType)
        setFilterOptions(dummyListFilter ? dummyListFilter : sqftFilter);   
    }

    return (
        <HomeLayout>
        <div className="px-5 md:flex md:flex-row">
            {/* Filter */}
            <div className="smd:w-1/3 flex justify-center">
                <div className="w-40 my-10">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xs">FILTER</p>
                        <div 
                            className="bg-primary hover:bg-green-500 w-12 h-6 rounded flex items-center justify-center cursor-pointer"
                            onClick={clearAll}
                        >
                            <p className="text-xs font-bold text-white scale-75">CLEAR</p>
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
                            <div>
                                <div className="pt-2" />
                                <hr className=""/>
                                {/* List */}
                                <p className="text-xs pt-4">LISTING TYPES</p>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        className="pl-4 checked:bg-red"
                                        value={2}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> All Listing Types
                                </div>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        className="pl-4"
                                        value={0}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> Available Properties
                                </div>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        value={1}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> Available Properties - Online Payments
                                </div>
                                <div className="pt-4"></div>
                                <hr className=""/>
                            </div>
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
                                    value={price}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                    //onBeforeChange={(value, index) => console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)}
                                    onChange={(value, index) => setPrice(value) }
                                    //onAfterChange={(value, index) => console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)}
                                />
                            </div>

                            <div className="pt-6 flex flex-between">
                                <div className="border">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-14 pt-1 pl-2 text-xs"
                                        placeholder="MIN"
                                        value={price[0]*10000}
                                        readOnly
                                        // onChange={() => {
                                        //     const arr= [ ,value[1]]
                                        // })}
                                    />
                                </div>
                                <div className="border ml-8">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-16 pt-1 pl-2 text-xs"
                                        placeholder="MAX"
                                        value={price[1]*10000}
                                        readOnly
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
                                    value={areaSqft}
                                    ariaLabel={['Lower thumb', 'Upper thumb']}
                                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    pearling
                                    minDistance={10}
                                    onChange={(value, index) => setAreaSqft(value)}
                                />
                            </div>

                            <div className="pt-6 flex flex-between">
                                <div className="border">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2 text-xs"
                                        placeholder="MIN"
                                        value={areaSqft[0]*100}
                                        readOnly
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                                <div className="border ml-14">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-12 pt-1 pl-2 text-xs"
                                        placeholder="MAX"
                                        value={areaSqft[1]*100}
                                        readOnly
                                        //onChange={handleChange('phone')}
                                    />
                                </div>
                            </div>
                            <div 
                                className="bg-primary mt-6 hover:bg-green-500 w-12 h-6 rounded flex items-center justify-center cursor-pointer"
                                onClick={doFilter}
                            >
                                <p className="text-xs font-bold text-white scale-75">FILTER</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {/* Cards for single property*/}
            <div
                className="grid flex-2 grid-cols-1 smd:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center xl:grid-cols-3 py-5 gap-7 smd:gap-4">
                {filterOptions?.map(item => (
                    <div key={item.id.toString()}>
                        <PropertyImage
                            key={item.id.toString()}
                            title={item.title}
                            location={item.location}
                            price={item.price}
                            description={item.description}
                            bedroom={item.bedroom}
                            bathroom={item.bathroom}
                            sqft={item.sqft}
                            imageUrl={item.imageUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
        </HomeLayout>
    )
}

export default index
