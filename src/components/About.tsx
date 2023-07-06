import { WrappedMap } from './AroundTheWorld/googlemaps'

export const About = () => {
    return (
        <div className='h-screen w-screen'>
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAp3oQzcyINh6_YYsyh8-68sqIHlV3jC1U'}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
}
