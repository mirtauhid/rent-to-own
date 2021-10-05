import React from 'react';
import ReactSlider from 'react-slider';

const index = ({sliderValue, setSliderValue, min, max, month}) => {
    return (
        <div>
            <div className="relative">
                <ReactSlider
                    className="bg-gray-400 text-white cursor-pointer horizontal-slider"
                    thumbClassName="h-6 w-6 bg-green-400 grid justify-center rounded-full absolute -top-2 text-white"
                    trackClassName="bg-green-500 h-1"
                    value={sliderValue}
                    min={min}
                    max={max}
                    step={month ? 6 : 1}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    onChange={(value, index) => setSliderValue(value) }
                />
            </div>

            <div className="pt-6 flex justify-between">
                <div className="text-center">
                    <div className="border w-16 text-center">
                        <p className="text-gray-400">{`${min} ${!month ? "%":""}`}</p>
                    </div>
                    <p className="text-sm text-gray-500">MIN</p>
                </div>
                <div className="">
                    <div className="text-center">
                        <div className="border w-16 text-center">
                            <p className="text-gray-400">{`${max} ${!month ? "%":""}`}</p>
                        </div>
                        <p className="text-sm text-gray-500">MAX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
