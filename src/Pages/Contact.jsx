// import React from 'react';
import GoogleMapReact from 'google-map-react';
const Contact = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 23.99,
            lng: 90.42
        },
        zoom: 11
    };

    return (
        <div>
            <div className="p-[20px] border-b-[0.3px] border-gray-700">
                <h1 className="text-[20px] font-semibold text-white"><span className="text-amber-600">C</span>ONTACT</h1>
            </div>
            <div className="p-[20px]">
                <div style={{ height: '300px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={23.999941}
                            lng={90.420273}
                            text={'Gazipur'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className='p-[25px]  gap-2 text-zinc-300'>
                <h1>Address . . . .Dhaka, Bangladesh</h1>
                <h1>Phone . . . .+8801788482775</h1>
                <h1>Email . . . .hossainshabbir51@gmail.com</h1>
            </div>
        </div>
    );
};



export default Contact;