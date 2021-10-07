import React, {useEffect} from 'react';
import PropertyImage from '../../Components/SubCard/PropertyImage';
import ReactSlider from 'react-slider';
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import HomeLayout from '../../Layouts/HomeLayout';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getProperty, getListingType, getFilteredData } from '../../redux/slices/property';
import { getProvience, getCities } from '../../redux/slices/areas';

const Property = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const {
        query: { state },
    } = router
    const [areaData, setAreaData] = React.useState();
    const [initData, setInitData] = React.useState();
    const [filterState, setFilterState] = React.useState(true);
    const [filterOptions, setFilterOptions] = React.useState();
    const [listingType, setListingType] = React.useState('');
    const [filterCity, setFilterCity] = React.useState('');
    const [proviceIds, setProviceIds] = React.useState(['']);
    const [price, setPrice] = React.useState(['0', '100']);
    const [areaSqft, setAreaSqft] = React.useState([0, 100]);
    const properties = useSelector((state) => state.property.allproperties);
    const listingType1 = useSelector((state) => state.property.listingType);
    const filteredData = useSelector((state) => state.property.filteredData);
    const areas = useSelector((state) => state.areas.status != 'loading' && state.areas);
    const allareas = areas?.status === 'success' ? areas.allareas : null;
    console.log('================areas====================');
    console.log(proviceIds);
    console.log(filteredData);
    console.log('====================================');

    useEffect(() => {
        setProviceIds(state)
    }, [areas, allareas])

    useEffect(() => {
        dispatch(getProperty());
        dispatch(getProvience());
        dispatch(getCities());
        dispatch(getListingType());
        dispatch(getFilteredData({
            listingTypeIds: listingType, 
            cityIds: filterCity,
            minPrice: parseInt(price[0]*10000),
            maxPrice: parseInt(price[1]*100000),
            minSize: parseInt(areaSqft[0]*100),
            maxSize: parseInt(areaSqft[1]*100),
            proviceIds: proviceIds.toString()
        }));
    }, [dispatch])

    useEffect(() => {
        dispatch(getFilteredData({
            listingTypeIds: listingType, 
            cityIds: filterCity,
            minPrice: parseInt(price[0]*10000),
            maxPrice: parseInt(price[1]*100000),
            minSize: parseInt(areaSqft[0]*100),
            maxSize: parseInt(areaSqft[1]*100),
        }));
    }, [listingType, filterCity, price, areaSqft])

    const resetAll = () => {
        setAreaData(allareas?.provinces?.map(d => {
            if(d.id === state) {
                return {
                    select: true,
                    id: d.id,
                    state: d.name,
                    areas: d.Cities.map(d => {
                        return {
                            id: d.id,
                            location: d.name,
                            checkbox: false,
                        }
                    }),
                }
            } else {
                return {
                    select: false,
                    id: d.id,
                    state: d.name,
                    areas: d.Cities.map(d => {
                        return {
                            id: d.id,
                            location: d.name,
                            checkbox: false,
                        }
                    }),
                }
            }
        }))
    }

    const initialData = () => {
        const dummy = [];
        areaData?.map(step1 => {
            step1.areas.map(step2 => {
                dummy.push(step2);
            })
        })
        setInitData(dummy)
        setFilterOptions(dummy);
    }
    //clear filtering
    const clearAll = () => {
        setListingType();
        setPrice([0, 100]);
        setAreaSqft([0, 100]);
        resetAll();
        initialData();
    }

    //reset all
    React.useEffect(() => {
        resetAll();
    }, [allareas])
    
    //initial data
    React.useEffect(() => {
        initialData();
        //doFilter();
    }, [areaData])
    
    //checkbox
    const onChangeValue = input => e => {
        setListingType(e.target.value);
        //console.log(listingType);
    }

    //main filtering for city listing
    const doFilter = async () => {
        const holder = [];
        await areaData?.map(step1 => {
            if(step1.select === true) {
                step1.areas.map(step2 => {
                    if (step2.checkbox === true) {
                        holder.push(parseInt(step2.id));
                    }
                })
            }
        })
        setFilterCity(holder.toString());   
    }

    React.useEffect(() => {
        doFilter();
    }, [initData])

    React.useEffect(() => {
        const priceFilter = filterOptions?.filter(
            item => 
                item.price >= (price[0]*10000) && item.price<= (price[1]*10000)
        )
    }, [price])

    if(areas.status === 'loading'){
        return( <p>Loading</p>)
    }

    return (
        <HomeLayout>
        <div className=" md:flex md:flex-row md:px-20 lg:px-28">
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
                        <div className="justify-self-end cursor-pointer p-2 block md:hidden" 
                            onClick={() => setFilterState(
                                state => !state
                            )}
                        >
                            {filterState ? <BiDownArrow /> : <BiRightArrow/> }
                        </div>
                    </div>
                    { filterState ? (
                        <div className="">
                            <div>
                                <div className="pt-2" />
                                <hr className=""/>
                                {/* List */}
                                <p className="text-xs pt-4">LISTING TYPES</p>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        className="pl-4 checked:bg-red"
                                        value={listingType1[0]?.id}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> {listingType1[0]?.name}
                                </div>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        className="pl-4"
                                        value={listingType1[1]?.id}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> {listingType1[1]?.name}
                                </div>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        value={listingType1[2]?.id}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> {listingType1[2]?.name}
                                </div>
                                <div className="pt-2 text-xs">
                                    <input 
                                        type="radio" 
                                        value={listingType1[3]?.id}
                                        name="listingType"
                                        onChange={onChangeValue("listingType")}
                                    /> {listingType1[3]?.name}
                                </div>
                                <div className="pt-4"></div>
                                <hr className=""/>
                            </div>
                            {areaData?.map(item => (
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
                                    className="cursor-pointer"
                                    thumbClassName="h-6 w-6 bg-green-400 grid justify-center rounded-full mb-2 absolute -top-2 text-green-400"
                                    trackClassName="bg-green-400 h-1"
                                    value={parseInt(price)}
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
                                        className="w-16 pt-1 pl-2 text-xs"
                                        placeholder="MIN"
                                        value={`$${(price[0]*100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                                        readOnly
                                        // onChange={() => {
                                        //     const arr= [ ,value[1]]
                                        // })}
                                    />
                                </div>
                                <div className="border ml-4">
                                    <input
                                        type="text"
                                        name="phone"
                                        className="w-20 pt-1 pl-1 text-xs"
                                        placeholder="MAX"
                                        value={`$${(price[1]*100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
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
                                    className="cursor-pointer"
                                    thumbClassName="h-6 w-6 bg-green-400 grid justify-center rounded-full mb-2 absolute -top-2 text-green-400 text-xs"
                                    trackClassName="bg-green-400 h-1"
                                    value={parseInt(areaSqft)}
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
                                        value={(areaSqft[0]*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
                                        value={(areaSqft[1]*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        readOnly
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
                className="grid flex-2 grid-cols-1 smd:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center xl:grid-cols-3 py-5 pl-8 gap-7 smd:gap-4">
                {filteredData?.map(item => (
                    <div className="cursor-pointer" key={item.id.toString()}>
                        <Link 
                            href={'/housesearch/' + item.id}
                        >
                            <a>
                                <PropertyImage
                                    key={item.id.toString()}
                                    title={item.name}
                                    location={item.PropertyAddresses[0].street}
                                    price={item.price}
                                    description={item.description}
                                    bedroom={item.bedroom}
                                    bathroom={item.bathroom}
                                    sqft={item.plotSize}
                                    imageUrl={item.PropertyImages[0]}
                                />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </HomeLayout>
    )
}

export default Property;
