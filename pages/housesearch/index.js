import React from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import GoogleMapReact from 'google-map-react';

const index = () => {
    const data = [1,2,3,4,5,6]
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <div className="p-5 lg:grid lg:justify-center">
            <input type="text" className="input border h-10 max-w-screen-lg w-10/12" placeholder="Search..." />
            <div className="grid md:grid-cols-2">
                <div className="max-w-lg grid grid-cols-1 lg:grid-cols-2 py-5 gap-4">
                    {data.map(item => (
                        <div>
                            <ImageCard />
                        </div>
                    ))}
                </div>
                <div style={{ height: '100vh', width: '100%' }} className="py-5 px-5">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={{lat: 59.95, lng: 30.33}}
                    defaultZoom={11}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default index
